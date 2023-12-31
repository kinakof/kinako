import { useSetting } from '@wordpress/block-editor';
import { parse } from '@wordpress/blocks';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect, useMemo } from '@wordpress/element';
import { _x } from '@wordpress/i18n';

/**
 * Migrate block name with double hyphen to blocl name with single hyphen.
 *
 * @param { string } clientId
 * @param { Array }  migrateBlocks
 *
 * @see https://github.com/inc2734/snow-monkey-blocks/issues/529
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/blocks/src/api/parser/index.js#L288-L317
 */
export const useMigrateDoubleHyphenToSingleHyphen = (
	clientId,
	migrateBlocks
) => {
	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );

	const { getBlockOrder, getBlock } = useSelect( ( select ) => {
		return {
			getBlockOrder: select( 'core/block-editor' ).getBlockOrder,
			getBlock: select( 'core/block-editor' ).getBlock,
		};
	}, [] );

	const blockNameToDefaultClassName = ( blockName ) => {
		return `wp-block-${ blockName.replace( '/', '-' ) }`;
	};

	useEffect( () => {
		const newInnerBlocks = getBlockOrder( clientId ).map(
			( itemClientId ) => {
				const item = getBlock( itemClientId );

				let migratedBlock;

				migrateBlocks.some( ( migrateBlock ) => {
					if (
						'core/missing' !== item.name &&
						migrateBlock.oldBlockName !== item.name
					) {
						return false;
					}

					const newBlock = parse(
						item.originalContent
							.replace(
								migrateBlock.oldBlockName,
								migrateBlock.newBlockName
							)
							.replace(
								blockNameToDefaultClassName(
									migrateBlock.oldBlockName
								),
								blockNameToDefaultClassName(
									migrateBlock.oldBlockName
								) +
									' ' +
									blockNameToDefaultClassName(
										migrateBlock.newBlockName
									)
							)
					)[ 0 ];

					if ( 'core/missing' !== newBlock.name ) {
						migratedBlock = newBlock;
						return true;
					}

					return false;
				} );

				return !! migratedBlock ? migratedBlock : item;
			}
		);

		if ( 0 < newInnerBlocks.length ) {
			replaceInnerBlocks( clientId, newInnerBlocks );
		}
		// Temporarily disabling exhaustive-deps to avoid introducing unexpected side effecst.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ clientId ] );
};

/**
 * Retrieves color and gradient related settings.
 *
 * @return {Object} Color and gradient related settings.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/src/components/colors-gradients/use-common-single-multiple-selects.js
 */
export function useCommonSingleMultipleSelects() {
	return {
		disableCustomColors: ! useSetting( 'color.custom' ),
		disableCustomGradients: ! useSetting( 'color.customGradient' ),
	};
}

/**
 * Retrieves color and gradient related settings.
 *
 * The arrays for colors and gradients are made up of color palettes from each
 * origin i.e. "Core", "Theme", and "User".
 *
 * @return {Object} Color and gradient related settings.
 *
 * @see https://github.com/WordPress/gutenberg/blob/df38b3d43a172773070a166fbaabcb184646cd11/packages/block-editor/src/components/colors-gradients/use-multiple-origin-colors-and-gradients.js
 */
export function useMultipleOriginColorsAndGradientsFallback() {
	const colorGradientSettings = useCommonSingleMultipleSelects();
	const customColors = useSetting( 'color.palette.custom' );
	const themeColors = useSetting( 'color.palette.theme' );
	const defaultColors = useSetting( 'color.palette.default' );
	const shouldDisplayDefaultColors = useSetting( 'color.defaultPalette' );

	colorGradientSettings.colors = useMemo( () => {
		const result = [];
		if ( themeColors && themeColors.length ) {
			result.push( {
				name: _x(
					'Theme',
					'Indicates this palette comes from the theme.',
					'snow-monkey-blocks'
				),
				colors: themeColors,
			} );
		}
		if (
			shouldDisplayDefaultColors &&
			defaultColors &&
			defaultColors.length
		) {
			result.push( {
				name: _x(
					'Default',
					'Indicates this palette comes from WordPress.',
					'snow-monkey-blocks'
				),
				colors: defaultColors,
			} );
		}
		if ( customColors && customColors.length ) {
			result.push( {
				name: _x(
					'Custom',
					'Indicates this palette comes from the theme.',
					'snow-monkey-blocks'
				),
				colors: customColors,
			} );
		}
		return result;
		// Temporarily disabling exhaustive-deps to avoid introducing unexpected side effecst.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ defaultColors, themeColors, customColors ] );

	const customGradients = useSetting( 'color.gradients.custom' );
	const themeGradients = useSetting( 'color.gradients.theme' );
	const defaultGradients = useSetting( 'color.gradients.default' );
	const shouldDisplayDefaultGradients = useSetting(
		'color.defaultGradients'
	);
	colorGradientSettings.gradients = useMemo( () => {
		const result = [];
		if ( themeGradients && themeGradients.length ) {
			result.push( {
				name: _x(
					'Theme',
					'Indicates this palette comes from the theme.',
					'snow-monkey-blocks'
				),
				gradients: themeGradients,
			} );
		}
		if (
			shouldDisplayDefaultGradients &&
			defaultGradients &&
			defaultGradients.length
		) {
			result.push( {
				name: _x(
					'Default',
					'Indicates this palette comes from WordPress.',
					'snow-monkey-blocks'
				),
				gradients: defaultGradients,
			} );
		}
		if ( customGradients && customGradients.length ) {
			result.push( {
				name: _x(
					'Custom',
					'Indicates this palette is created by the user.',
					'snow-monkey-blocks'
				),
				gradients: customGradients,
			} );
		}
		return result;
		// Temporarily disabling exhaustive-deps to avoid introducing unexpected side effecst.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ customGradients, themeGradients, defaultGradients ] );

	return colorGradientSettings;
}
