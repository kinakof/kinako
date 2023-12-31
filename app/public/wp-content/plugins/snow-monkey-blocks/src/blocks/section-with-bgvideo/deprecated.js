import classnames from 'classnames';
import hexToRgba from 'hex-to-rgba';
import { omit, without } from 'lodash';

import {
	RichText,
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';

import metadata from './block.json';
import { getVideoId } from './utils';
import { SectionBackground } from '../section/components/background';
import { Save as Header } from '../section/components/header';

const blockAttributes = metadata.attributes;
const blockSupports = metadata.supports;

export default [
	{
		attributes: {
			...blockAttributes,
		},

		supports: {
			...blockSupports,
		},

		save( { attributes, className } ) {
			const {
				align,

				contentsAlignment,
				maskColor,
				maskGradientColor,
				maskOpacity,
				textColor,
				contentJustification,
				itemsAlignment,

				title,
				subtitle,
				lede,

				titleTagName,
				height,
				disableCustomHeight,
				containerAlign,
				disableContainerPadding,
				contentsMaxWidth,
				isSlim,

				backgroundText,
			} = attributes;

			const TagName = 'div';

			const isItemsAlignmentable = 'fit' !== height;

			const classes = classnames(
				'smb-section',
				'smb-section-with-bgimage',
				'smb-section-with-bgvideo',
				className,
				{
					[ `smb-section--${ contentsAlignment }` ]:
						!! contentsAlignment,
					[ `smb-section--${ height }` ]:
						!! height && disableCustomHeight,
					[ `is-items-alignment-${ itemsAlignment }` ]:
						!! itemsAlignment && isItemsAlignmentable,
				}
			);

			const bgvideoClasses = classnames(
				'smb-section-with-bgimage__bgimage'
			);

			const innerClasses = classnames( 'smb-section__inner', {
				[ `is-content-justification-${ contentJustification }` ]:
					!! contentJustification,
			} );

			const containerClasses = classnames( 'c-container', {
				alignfull:
					( 'full' === containerAlign ||
						'contents-full' === containerAlign ) &&
					'full' === align,
				alignwide:
					'wide' === containerAlign ||
					( 'contents-wide' === containerAlign && 'full' === align ),
				'c-container--no-padding':
					disableContainerPadding &&
					( 'full' === containerAlign ||
						'contents-full' === containerAlign ) &&
					'full' === align,
			} );

			let headerContainerClasses = containerClasses
				.replace( 'c-container--no-padding', '' )
				.trim();
			if (
				'contents-wide' === containerAlign ||
				'contents-full' === containerAlign
			) {
				headerContainerClasses = headerContainerClasses
					.replace( 'alignfull', '' )
					.replace( 'alignwide', '' )
					.trim();
			}

			const contentsWrapperClasses = classnames(
				'smb-section__contents-wrapper',
				{
					[ `smb-section__contents-wrapper--${ contentsAlignment }` ]:
						!! contentsAlignment,
					'u-slim-width': isSlim && ! contentsMaxWidth,
				}
			);

			const sectionStyles = {
				color: textColor || undefined,
				'--smb-section--min-height':
					!! height && ! disableCustomHeight ? height : undefined,
			};

			const maskStyles = {};
			if ( maskColor || maskGradientColor ) {
				maskStyles.backgroundColor = maskColor;
				maskStyles.backgroundImage = maskGradientColor;
			}

			const bgvideoStyles = {
				opacity: maskOpacity,
			};

			const innerStyles = {};

			const contentsWrapperStyles = {
				width:
					!! contentsMaxWidth && ! isSlim
						? contentsMaxWidth
						: undefined,
			};

			return (
				<TagName
					{ ...useBlockProps.save( {
						className: classes,
						style: sectionStyles,
					} ) }
				>
					<div
						className="smb-section-with-bgimage__mask"
						style={ maskStyles }
					/>
					<div
						className={ bgvideoClasses }
						style={ bgvideoStyles }
					></div>

					<SectionBackground
						{ ...{
							backgroundText,
							containerClasses,
						} }
					/>

					<div className={ innerClasses } style={ innerStyles }>
						<div className={ containerClasses }>
							<div
								className={ contentsWrapperClasses }
								style={ contentsWrapperStyles }
							>
								<Header
									{ ...{
										title,
										titleTagName,
										subtitle,
										lede,
										hasContainer:
											( disableContainerPadding &&
												'full' === containerAlign &&
												'full' === align ) ||
											'contents-wide' ===
												containerAlign ||
											'contents-full' === containerAlign,
										containerClassName:
											headerContainerClasses,
									} }
								/>

								<div
									{ ...useInnerBlocksProps.save( {
										className: 'smb-section__body',
									} ) }
								/>
							</div>
						</div>
					</div>
				</TagName>
			);
		},
	},
	{
		attributes: {
			...blockAttributes,
		},

		supports: {
			align: [ 'wide', 'full' ],
		},

		save( { attributes, className } ) {
			const {
				align,

				videoURL,
				videoWidth,
				videoHeight,
				contentsAlignment,
				maskColor,
				maskGradientColor,
				maskOpacity,
				textColor,
				contentJustification,
				itemsAlignment,

				title,
				subtitle,
				lede,

				titleTagName,
				height,
				containerAlign,
				disableContainerPadding,
				contentsMaxWidth,
				isSlim,

				backgroundText,
			} = attributes;

			const TagName = 'div';

			const isItemsAlignmentable = 'fit' !== height;

			const classes = classnames(
				'smb-section',
				'smb-section-with-bgimage',
				'smb-section-with-bgvideo',
				className,
				{
					[ `smb-section--${ contentsAlignment }` ]:
						!! contentsAlignment,
					[ `smb-section--${ height }` ]: !! height,
					[ `is-items-alignment-${ itemsAlignment }` ]:
						!! itemsAlignment && isItemsAlignmentable,
				}
			);

			const bgvideoClasses = classnames(
				'smb-section-with-bgimage__bgimage'
			);

			const innerClasses = classnames( 'smb-section__inner', {
				[ `is-content-justification-${ contentJustification }` ]:
					!! contentJustification,
			} );

			const containerClasses = classnames( 'c-container', {
				alignfull:
					( 'full' === containerAlign ||
						'contents-full' === containerAlign ) &&
					'full' === align,
				alignwide:
					'wide' === containerAlign ||
					( 'contents-wide' === containerAlign && 'full' === align ),
				'c-container--no-padding':
					disableContainerPadding &&
					( 'full' === containerAlign ||
						'contents-full' === containerAlign ) &&
					'full' === align,
			} );

			let headerContainerClasses = containerClasses
				.replace( 'c-container--no-padding', '' )
				.trim();
			if (
				'contents-wide' === containerAlign ||
				'contents-full' === containerAlign
			) {
				headerContainerClasses = headerContainerClasses
					.replace( 'alignfull', '' )
					.replace( 'alignwide', '' )
					.trim();
			}

			const contentsWrapperClasses = classnames(
				'smb-section__contents-wrapper',
				{
					[ `smb-section__contents-wrapper--${ contentsAlignment }` ]:
						!! contentsAlignment,
					'u-slim-width': isSlim && ! contentsMaxWidth,
				}
			);

			const sectionStyles = {
				color: textColor || undefined,
			};

			const maskStyles = {};
			if ( maskColor || maskGradientColor ) {
				maskStyles.backgroundColor = maskColor;
				maskStyles.backgroundImage = maskGradientColor;
			}

			const bgvideoStyles = {
				opacity: maskOpacity,
			};

			const innerStyles = {};

			const contentsWrapperStyles = {
				width:
					!! contentsMaxWidth && ! isSlim
						? contentsMaxWidth
						: undefined,
			};

			return (
				<TagName
					{ ...useBlockProps.save( {
						className: classes,
						style: sectionStyles,
					} ) }
				>
					<div
						className="smb-section-with-bgimage__mask"
						style={ maskStyles }
					/>
					<div className={ bgvideoClasses } style={ bgvideoStyles }>
						{ videoURL && (
							<>
								<iframe
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									src={ `https://www.youtube.com/embed/${ getVideoId(
										videoURL
									) }?controls=0&autoplay=1&showinfo=0&rel=0&disablekb=1&iv_load_policy=3&loop=1&playlist=${ getVideoId(
										videoURL
									) }&playsinline=1&modestbranding=1&mute=1` }
									width={ videoWidth }
									height={ videoHeight }
									frameBorder="0"
									title={ videoURL }
								/>
								<img
									src={ `https://i.ytimg.com/vi/${ getVideoId(
										videoURL
									) }/maxresdefault.jpg` }
									alt=""
								/>
							</>
						) }
					</div>

					<SectionBackground
						{ ...{
							backgroundText,
							containerClasses,
						} }
					/>

					<div className={ innerClasses } style={ innerStyles }>
						<div className={ containerClasses }>
							<div
								className={ contentsWrapperClasses }
								style={ contentsWrapperStyles }
							>
								<Header
									{ ...{
										title,
										titleTagName,
										subtitle,
										lede,
										hasContainer:
											( disableContainerPadding &&
												'full' === containerAlign &&
												'full' === align ) ||
											'contents-wide' ===
												containerAlign ||
											'contents-full' === containerAlign,
										containerClassName:
											headerContainerClasses,
									} }
								/>

								<div
									{ ...useInnerBlocksProps.save( {
										className: 'smb-section__body',
									} ) }
								/>
							</div>
						</div>
					</div>
				</TagName>
			);
		},
	},
	{
		attributes: {
			...blockAttributes,
		},

		supports: {
			align: [ 'wide', 'full' ],
		},

		save( { attributes, className } ) {
			const {
				videoURL,
				videoWidth,
				videoHeight,
				contentsAlignment,
				maskColor,
				maskGradientColor,
				maskOpacity,
				textColor,
				contentJustification,
				itemsAlignment,

				title,
				subtitle,
				lede,

				titleTagName,
				height,
				containerAlign,
				contentsMaxWidth,
				isSlim,
			} = attributes;

			const TagName = 'div';

			const isItemsAlignmentable = 'fit' !== height;

			const classes = classnames(
				'smb-section',
				'smb-section-with-bgimage',
				'smb-section-with-bgvideo',
				className,
				{
					[ `smb-section--${ contentsAlignment }` ]:
						!! contentsAlignment,
					[ `smb-section--${ height }` ]: !! height,
					[ `is-items-alignment-${ itemsAlignment }` ]:
						!! itemsAlignment && isItemsAlignmentable,
				}
			);

			const bgvideoClasses = classnames(
				'smb-section-with-bgimage__bgimage'
			);

			const innerClasses = classnames( 'smb-section__inner', {
				[ `is-content-justification-${ contentJustification }` ]:
					!! contentJustification,
			} );

			const containerClasses = classnames( 'c-container', {
				alignfull: 'full' === containerAlign,
				alignwide: 'wide' === containerAlign,
			} );

			const contentsWrapperClasses = classnames(
				'smb-section__contents-wrapper',
				{
					[ `smb-section__contents-wrapper--${ contentsAlignment }` ]:
						!! contentsAlignment,
					'u-slim-width': isSlim && ! contentsMaxWidth,
				}
			);

			const sectionStyles = {
				color: textColor || undefined,
			};

			const maskStyles = {};
			if ( maskColor || maskGradientColor ) {
				maskStyles.backgroundColor = maskColor;
				maskStyles.backgroundImage = maskGradientColor;
			}

			const bgvideoStyles = {
				opacity: maskOpacity,
			};

			const innerStyles = {};

			const contentsWrapperStyles = {
				maxWidth:
					!! contentsMaxWidth && ! isSlim
						? contentsMaxWidth
						: undefined,
			};

			return (
				<TagName
					{ ...useBlockProps.save( {
						className: classes,
						style: sectionStyles,
					} ) }
				>
					<div
						className="smb-section-with-bgimage__mask"
						style={ maskStyles }
					/>
					<div className={ bgvideoClasses } style={ bgvideoStyles }>
						{ videoURL && (
							<>
								<iframe
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									src={ `https://www.youtube.com/embed/${ getVideoId(
										videoURL
									) }?controls=0&autoplay=1&showinfo=0&rel=0&disablekb=1&iv_load_policy=3&loop=1&playlist=${ getVideoId(
										videoURL
									) }&playsinline=1&modestbranding=1&mute=1` }
									width={ videoWidth }
									height={ videoHeight }
									frameBorder="0"
									title={ videoURL }
								/>
								<img
									src={ `https://i.ytimg.com/vi/${ getVideoId(
										videoURL
									) }/maxresdefault.jpg` }
									alt=""
								/>
							</>
						) }
					</div>

					<div className={ innerClasses } style={ innerStyles }>
						<div className={ containerClasses }>
							<div
								className={ contentsWrapperClasses }
								style={ contentsWrapperStyles }
							>
								<Header
									{ ...{
										title,
										titleTagName,
										subtitle,
										lede,
									} }
								/>

								<div className="smb-section__body">
									<InnerBlocks.Content />
								</div>
							</div>
						</div>
					</div>
				</TagName>
			);
		},
	},
	{
		attributes: {
			...blockAttributes,
		},

		supports: {
			align: [ 'wide', 'full' ],
		},

		migrate( attributes ) {
			if ( !! attributes.className ) {
				attributes.className = without(
					attributes.className.split( ' ' ),
					'smb-section--left',
					'smb-section--center',
					'smb-section--right'
				).join( ' ' );
			}

			if ( ! attributes.className ) {
				attributes = omit( attributes, 'className' );
			}

			return {
				...attributes,
			};
		},

		save( { attributes, className } ) {
			const {
				titleTagName,
				title,
				subtitle,
				lede,
				videoURL,
				videoWidth,
				videoHeight,
				height,
				contentsAlignment,
				maskColor,
				maskGradientColor,
				maskOpacity,
				textColor,
				isSlim,
				contentJustification,
				itemsAlignment,
			} = attributes;

			const TagName = 'div';

			const isItemsAlignmentable = 'fit' !== height;

			const classes = classnames(
				'smb-section',
				'smb-section-with-bgimage',
				'smb-section-with-bgvideo',
				className,
				{
					[ `smb-section--${ contentsAlignment }` ]:
						!! contentsAlignment,
					[ `smb-section--${ height }` ]: !! height,
					[ `is-content-justification-${ contentJustification }` ]:
						!! contentJustification,
					[ `is-items-alignment-${ itemsAlignment }` ]:
						!! itemsAlignment && isItemsAlignmentable,
				}
			);

			const bgvideoClasses = classnames(
				'smb-section-with-bgimage__bgimage'
			);

			const containerClasses = classnames( 'c-container', {
				'u-slim-width': !! isSlim,
			} );

			const hasTitle =
				! RichText.isEmpty( title ) && 'none' !== titleTagName;
			const hasSubTitle = ! RichText.isEmpty( subtitle );
			const hasLede = ! RichText.isEmpty( lede );

			const sectionStyles = {
				color: textColor || undefined,
			};

			const maskStyles = {};
			if ( maskColor || maskGradientColor ) {
				maskStyles.backgroundColor = maskColor;
				maskStyles.backgroundImage = maskGradientColor;
			}

			const bgvideoStyles = {
				opacity: maskOpacity,
			};

			return (
				<TagName
					{ ...useBlockProps.save( {
						className: classes,
						style: sectionStyles,
					} ) }
				>
					<div
						className="smb-section-with-bgimage__mask"
						style={ maskStyles }
					/>
					<div className={ bgvideoClasses } style={ bgvideoStyles }>
						{ videoURL && (
							<>
								<iframe
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									src={ `https://www.youtube.com/embed/${ getVideoId(
										videoURL
									) }?controls=0&autoplay=1&showinfo=0&rel=0&disablekb=1&iv_load_policy=3&loop=1&playlist=${ getVideoId(
										videoURL
									) }&playsinline=1&modestbranding=1&mute=1` }
									width={ videoWidth }
									height={ videoHeight }
									frameBorder="0"
									title={ videoURL }
								/>
								<img
									src={ `https://i.ytimg.com/vi/${ getVideoId(
										videoURL
									) }/maxresdefault.jpg` }
									alt=""
								/>
							</>
						) }
					</div>

					<div className="smb-section__inner">
						<div className={ containerClasses }>
							{ hasTitle && hasSubTitle && (
								<RichText.Content
									tagName="div"
									className="smb-section__subtitle"
									value={ subtitle }
								/>
							) }

							{ hasTitle && (
								<RichText.Content
									tagName={ titleTagName }
									className="smb-section__title"
									value={ title }
								/>
							) }

							{ hasTitle && hasLede && (
								<div className="smb-section__lede-wrapper">
									<RichText.Content
										tagName="div"
										className="smb-section__lede"
										value={ lede }
									/>
								</div>
							) }

							<div className="smb-section__body">
								<InnerBlocks.Content />
							</div>
						</div>
					</div>
				</TagName>
			);
		},
	},
	{
		attributes: {
			...blockAttributes,
		},

		supports: {
			align: [ 'wide', 'full' ],
		},

		save( { attributes, className } ) {
			const {
				titleTagName,
				title,
				subtitle,
				lede,
				videoURL,
				videoWidth,
				videoHeight,
				height,
				contentsAlignment,
				maskColor,
				maskGradientColor,
				maskOpacity,
				textColor,
				isSlim,
			} = attributes;

			const TagName = 'div';

			const classes = classnames(
				'smb-section',
				'smb-section-with-bgimage',
				'smb-section-with-bgvideo',
				className,
				{
					[ `smb-section--${ contentsAlignment }` ]:
						!! contentsAlignment,
					[ `smb-section--${ height }` ]: !! height,
				}
			);

			const bgvideoClasses = classnames(
				'smb-section-with-bgimage__bgimage'
			);

			const containerClasses = classnames( 'c-container', {
				'u-slim-width': !! isSlim,
			} );

			const hasTitle =
				! RichText.isEmpty( title ) && 'none' !== titleTagName;
			const hasSubTitle = ! RichText.isEmpty( subtitle );
			const hasLede = ! RichText.isEmpty( lede );

			const sectionStyles = {
				color: textColor || undefined,
			};

			const maskStyles = {};
			if ( maskColor || maskGradientColor ) {
				maskStyles.backgroundColor = maskColor;
				maskStyles.backgroundImage = maskGradientColor;
			}

			const bgvideoStyles = {
				opacity: maskOpacity,
			};

			return (
				<TagName
					{ ...useBlockProps.save( {
						className: classes,
						style: sectionStyles,
					} ) }
				>
					<div
						className="smb-section-with-bgimage__mask"
						style={ maskStyles }
					/>
					<div className={ bgvideoClasses } style={ bgvideoStyles }>
						{ videoURL && (
							<>
								<iframe
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									src={ `https://www.youtube.com/embed/${ getVideoId(
										videoURL
									) }?controls=0&autoplay=1&showinfo=0&rel=0&disablekb=1&iv_load_policy=3&loop=1&playlist=${ getVideoId(
										videoURL
									) }&playsinline=1&modestbranding=1&mute=1` }
									width={ videoWidth }
									height={ videoHeight }
									frameBorder="0"
									title={ videoURL }
								/>
								<img
									src={ `https://i.ytimg.com/vi/${ getVideoId(
										videoURL
									) }/maxresdefault.jpg` }
									alt=""
								/>
							</>
						) }
					</div>
					<div className={ containerClasses }>
						{ hasTitle && hasSubTitle && (
							<RichText.Content
								tagName="div"
								className="smb-section__subtitle"
								value={ subtitle }
							/>
						) }

						{ hasTitle && (
							<RichText.Content
								tagName={ titleTagName }
								className="smb-section__title"
								value={ title }
							/>
						) }

						{ hasTitle && hasLede && (
							<RichText.Content
								tagName="div"
								className="smb-section__lede"
								value={ lede }
							/>
						) }

						<div className="smb-section__body">
							<InnerBlocks.Content />
						</div>
					</div>
				</TagName>
			);
		},
	},
	{
		attributes: {
			...blockAttributes,
		},

		supports: {
			align: [ 'wide', 'full' ],
		},

		save( { attributes, className } ) {
			const {
				titleTagName,
				title,
				subtitle,
				lede,
				videoURL,
				videoWidth,
				videoHeight,
				height,
				contentsAlignment,
				maskColor,
				maskGradientColor,
				maskOpacity,
				textColor,
				isSlim,
			} = attributes;

			const TagName = 'div';

			const classes = classnames(
				'smb-section',
				'smb-section-with-bgimage',
				'smb-section-with-bgvideo',
				`smb-section-with-bgimage--${ contentsAlignment }`,
				`smb-section-with-bgimage--${ height }`,
				className
			);

			const bgvideoClasses = classnames(
				'smb-section-with-bgimage__bgimage'
			);

			const containerClasses = classnames( 'c-container', {
				'u-slim-width': !! isSlim,
			} );

			const hasTitle =
				! RichText.isEmpty( title ) && 'none' !== titleTagName;
			const hasSubTitle = ! RichText.isEmpty( subtitle );
			const hasLede = ! RichText.isEmpty( lede );

			const sectionStyles = {
				color: textColor || undefined,
			};

			const maskStyles = {};
			if ( maskColor || maskGradientColor ) {
				maskStyles.backgroundColor = maskColor;
				maskStyles.backgroundImage = maskGradientColor;
			}

			const bgvideoStyles = {
				opacity: maskOpacity,
			};

			return (
				<TagName
					{ ...useBlockProps.save( {
						className: classes,
						style: sectionStyles,
					} ) }
				>
					<div
						className="smb-section-with-bgimage__mask"
						style={ maskStyles }
					/>
					<div className={ bgvideoClasses } style={ bgvideoStyles }>
						{ videoURL && (
							<>
								<iframe
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									src={ `https://www.youtube.com/embed/${ getVideoId(
										videoURL
									) }?controls=0&autoplay=1&showinfo=0&rel=0&disablekb=1&iv_load_policy=3&loop=1&playlist=${ getVideoId(
										videoURL
									) }&playsinline=1&modestbranding=1&mute=1` }
									width={ videoWidth }
									height={ videoHeight }
									frameBorder="0"
									title={ videoURL }
								/>
								<img
									src={ `https://i.ytimg.com/vi/${ getVideoId(
										videoURL
									) }/maxresdefault.jpg` }
									alt=""
								/>
							</>
						) }
					</div>
					<div className={ containerClasses }>
						{ hasTitle && hasSubTitle && (
							<RichText.Content
								tagName="div"
								className="smb-section__subtitle"
								value={ subtitle }
							/>
						) }

						{ hasTitle && (
							<RichText.Content
								tagName={ titleTagName }
								className="smb-section__title"
								value={ title }
							/>
						) }

						{ hasTitle && hasLede && (
							<RichText.Content
								tagName="div"
								className="smb-section__lede"
								value={ lede }
							/>
						) }

						<div className="smb-section__body">
							<InnerBlocks.Content />
						</div>
					</div>
				</TagName>
			);
		},
	},
	{
		attributes: {
			...blockAttributes,
		},

		supports: {
			align: [ 'wide', 'full' ],
		},

		save( { attributes, className } ) {
			const {
				titleTagName,
				title,
				subtitle,
				lede,
				videoURL,
				videoWidth,
				videoHeight,
				height,
				contentsAlignment,
				maskColor,
				maskColor2,
				maskColorAngle,
				maskOpacity,
				textColor,
				isSlim,
			} = attributes;

			const TagName = 'div';
			const classes = classnames(
				'smb-section',
				'smb-section-with-bgimage',
				'smb-section-with-bgvideo',
				`smb-section-with-bgimage--${ contentsAlignment }`,
				`smb-section-with-bgimage--${ height }`,
				className
			);

			const bgvideoClasses = classnames(
				'smb-section-with-bgimage__bgimage'
			);

			const containerClasses = classnames( 'c-container', {
				'u-slim-width': !! isSlim,
			} );

			const sectionStyles = {
				color: textColor || undefined,
			};

			const maskStyles = {};
			if ( maskColor ) {
				maskStyles.backgroundColor = maskColor;
				if ( maskColor2 ) {
					maskStyles.backgroundImage = `linear-gradient(${ maskColorAngle }deg, ${ maskColor } 0%, ${ maskColor2 } 100%)`;
				}
			}

			const bgvideoStyles = {
				opacity: maskOpacity,
			};

			return (
				<TagName
					{ ...useBlockProps.save( {
						className: classes,
						style: sectionStyles,
					} ) }
				>
					<div
						className="smb-section-with-bgimage__mask"
						style={ maskStyles }
					/>
					<div className={ bgvideoClasses } style={ bgvideoStyles }>
						{ videoURL && (
							<>
								<iframe
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									src={ `https://www.youtube.com/embed/${ getVideoId(
										videoURL
									) }?controls=0&autoplay=1&showinfo=0&rel=0&disablekb=1&iv_load_policy=3&loop=1&playlist=${ getVideoId(
										videoURL
									) }&playsinline=1&modestbranding=1&mute=1` }
									width={ videoWidth }
									height={ videoHeight }
									frameBorder="0"
									title={ videoURL }
								/>
								<img
									src={ `https://i.ytimg.com/vi/${ getVideoId(
										videoURL
									) }/maxresdefault.jpg` }
									alt=""
								/>
							</>
						) }
					</div>
					<div className={ containerClasses }>
						{ ! RichText.isEmpty( title ) &&
							! RichText.isEmpty( subtitle ) &&
							'none' !== titleTagName && (
								<RichText.Content
									tagName="div"
									className="smb-section__subtitle"
									value={ subtitle }
								/>
							) }

						{ ! RichText.isEmpty( title ) &&
							'none' !== titleTagName && (
								<RichText.Content
									tagName={ titleTagName }
									className="smb-section__title"
									value={ title }
								/>
							) }

						{ ! RichText.isEmpty( title ) &&
							! RichText.isEmpty( lede ) &&
							'none' !== titleTagName && (
								<RichText.Content
									tagName="div"
									className="smb-section__lede"
									value={ lede }
								/>
							) }

						<div className="smb-section__body">
							<InnerBlocks.Content />
						</div>
					</div>
				</TagName>
			);
		},
	},
	{
		attributes: {
			...blockAttributes,
			maskColor2: {
				type: 'string',
			},
			maskColorAngle: {
				type: 'number',
				default: 0,
			},
		},

		migrate( attributes ) {
			let maskGradientColor;
			if ( attributes.maskColor2 ) {
				maskGradientColor = `linear-gradient(${
					attributes.maskColorAngle
				}deg, ${ hexToRgba( attributes.maskColor ) } 0%, ${ hexToRgba(
					attributes.maskColor2
				) } 100%)`;
				attributes.maskColor = undefined;
			}

			return {
				...attributes,
				maskGradientColor,
			};
		},

		supports: {
			align: [ 'wide', 'full' ],
		},

		save( { attributes, className } ) {
			const {
				titleTagName,
				title,
				subtitle,
				lede,
				videoURL,
				videoWidth,
				videoHeight,
				height,
				contentsAlignment,
				maskColor,
				maskColor2,
				maskColorAngle,
				maskOpacity,
				textColor,
				isSlim,
			} = attributes;

			const TagName = 'div';
			const classes = classnames(
				'smb-section',
				'smb-section-with-bgimage',
				'smb-section-with-bgvideo',
				`smb-section-with-bgimage--${ contentsAlignment }`,
				`smb-section-with-bgimage--${ height }`,
				className
			);

			const bgvideoClasses = classnames(
				'smb-section-with-bgimage__bgimage'
			);

			const containerClasses = classnames( 'c-container', {
				'u-slim-width': !! isSlim,
			} );

			const sectionStyles = {
				color: textColor || undefined,
			};

			const maskStyles = {};
			if ( maskColor ) {
				maskStyles.backgroundColor = maskColor;
				if ( maskColor2 ) {
					maskStyles.backgroundImage = `linear-gradient(${ maskColorAngle }deg, ${ maskColor } 0%, ${ maskColor2 } 100%)`;
				}
			}

			const bgvideoStyles = {
				opacity: maskOpacity,
			};

			return (
				<TagName
					{ ...useBlockProps.save( {
						className: classes,
						style: sectionStyles,
					} ) }
				>
					<div
						className="smb-section-with-bgimage__mask"
						style={ maskStyles }
					/>
					<div className={ bgvideoClasses } style={ bgvideoStyles }>
						{ videoURL && (
							<>
								<iframe
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									src={ `https://www.youtube.com/embed/${ getVideoId(
										videoURL
									) }?controls=0&autoplay=1&showinfo=0&rel=0&disablekb=1&iv_load_policy=3&loop=1&playlist=${ getVideoId(
										videoURL
									) }&playsinline=1&modestbranding=1&mute=1` }
									width={ videoWidth }
									height={ videoHeight }
									frameBorder="0"
									title={ videoURL }
								/>
								<img
									src={ `https://i.ytimg.com/vi/${ getVideoId(
										videoURL
									) }/maxresdefault.jpg` }
									alt=""
								/>
							</>
						) }
					</div>
					<div className={ containerClasses }>
						{ ! RichText.isEmpty( title ) &&
							! RichText.isEmpty( subtitle ) &&
							'none' !== titleTagName && (
								<RichText.Content
									tagName="div"
									className="smb-section__subtitle"
									value={ subtitle }
								/>
							) }

						{ ! RichText.isEmpty( title ) &&
							'none' !== titleTagName && (
								<RichText.Content
									tagName={ titleTagName }
									className="smb-section__title"
									value={ title }
								/>
							) }

						{ ! RichText.isEmpty( title ) &&
							! RichText.isEmpty( lede ) &&
							'none' !== titleTagName && (
								<RichText.Content
									tagName="div"
									className="smb-section__lede"
									value={ lede }
								/>
							) }

						<div className="smb-section__body">
							<InnerBlocks.Content />
						</div>
					</div>
				</TagName>
			);
		},
	},
	{
		attributes: {
			...blockAttributes,
		},

		supports: {
			align: [ 'wide', 'full' ],
		},

		save( { attributes, className } ) {
			const {
				titleTagName,
				title,
				videoURL,
				videoWidth,
				videoHeight,
				height,
				contentsAlignment,
				maskColor,
				maskOpacity,
				textColor,
				isSlim,
			} = attributes;

			const classes = classnames(
				'smb-section',
				'smb-section-with-bgvideo',
				'smb-section-with-bgimage',
				`smb-section-with-bgimage--${ contentsAlignment }`,
				`smb-section-with-bgimage--${ height }`,
				className
			);

			const bgvideoClasses = classnames(
				'smb-section-with-bgimage__bgimage'
			);

			const containerClasses = classnames( 'c-container', {
				'u-slim-width': !! isSlim,
			} );

			const sectionStyles = {
				color: textColor || undefined,
			};

			const maskStyles = {
				backgroundColor: maskColor || undefined,
				opacity: 1 - maskOpacity,
			};

			return (
				<div className={ classes } style={ sectionStyles }>
					<div className={ bgvideoClasses }>
						{ videoURL && (
							<>
								<iframe
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									src={ `https://www.youtube.com/embed/${ getVideoId(
										videoURL
									) }?controls=0&autoplay=1&showinfo=0&rel=0&disablekb=1&iv_load_policy=3&loop=1&playlist=${ getVideoId(
										videoURL
									) }&playsinline=1&modestbranding=1` }
									width={ videoWidth }
									height={ videoHeight }
									frameBorder="0"
									title={ videoURL }
								/>
								<img
									src={ `https://i.ytimg.com/vi/${ getVideoId(
										videoURL
									) }/maxresdefault.jpg` }
									alt=""
								/>
							</>
						) }
					</div>
					<div
						className="smb-section-with-bgimage__mask"
						style={ maskStyles }
					/>
					<div className={ containerClasses }>
						{ ! RichText.isEmpty( title ) &&
							'none' !== titleTagName && (
								<RichText.Content
									tagName={ titleTagName }
									className="smb-section__title"
									value={ title }
								/>
							) }
						<div className="smb-section__body">
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			);
		},
	},
	{
		attributes: {
			...blockAttributes,
		},

		supports: {
			align: [ 'wide', 'full' ],
		},

		migrate( attributes ) {
			const isSlim = !! attributes.contentsWidth;
			return { ...attributes, isSlim };
		},

		save( { attributes, className } ) {
			const {
				titleTagName,
				title,
				videoURL,
				videoWidth,
				videoHeight,
				height,
				contentsAlignment,
				maskColor,
				maskOpacity,
				textColor,
				contentsWidth,
			} = attributes;

			const classes = classnames(
				'smb-section',
				'smb-section-with-bgvideo',
				'smb-section-with-bgimage',
				`smb-section-with-bgimage--${ contentsAlignment }`,
				`smb-section-with-bgimage--${ height }`,
				className
			);

			const bgvideoClasses = classnames(
				'smb-section-with-bgimage__bgimage'
			);

			const containerClasses = classnames( 'c-container', {
				'u-slim-width': !! contentsWidth,
			} );

			const sectionStyles = {
				color: textColor || undefined,
			};

			const maskStyles = {
				backgroundColor: maskColor || undefined,
				opacity: 1 - maskOpacity,
			};

			return (
				<div className={ classes } style={ sectionStyles }>
					<div className={ bgvideoClasses }>
						{ videoURL && (
							<>
								<iframe
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									src={ `https://www.youtube.com/embed/${ getVideoId(
										videoURL
									) }?controls=0&autoplay=1&showinfo=0&rel=0&disablekb=1&iv_load_policy=3&loop=1&playlist=${ getVideoId(
										videoURL
									) }&playsinline=1&modestbranding=1` }
									width={ videoWidth }
									height={ videoHeight }
									frameBorder="0"
									title={ videoURL }
								/>
								<img
									src={ `http://i.ytimg.com/vi/${ getVideoId(
										videoURL
									) }/maxresdefault.jpg` }
									alt=""
								/>
							</>
						) }
					</div>
					<div
						className="smb-section-with-bgimage__mask"
						style={ maskStyles }
					/>
					<div className={ containerClasses }>
						{ ! RichText.isEmpty( title ) &&
							'none' !== titleTagName && (
								<RichText.Content
									tagName={ titleTagName }
									className="smb-section__title"
									value={ title }
								/>
							) }
						<div className="smb-section__body">
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			);
		},
	},
	{
		attributes: {
			...blockAttributes,
		},

		supports: {
			align: [ 'wide', 'full' ],
		},

		save( { attributes, className } ) {
			const {
				title,
				videoURL,
				videoWidth,
				videoHeight,
				height,
				contentsAlignment,
				maskColor,
				maskOpacity,
				textColor,
			} = attributes;

			const classes = classnames(
				'smb-section',
				'smb-section-with-bgvideo',
				'smb-section-with-bgimage',
				`smb-section-with-bgimage--${ contentsAlignment }`,
				`smb-section-with-bgimage--${ height }`,
				className
			);

			const bgvideoClasses = classnames(
				'smb-section-with-bgimage__bgimage'
			);

			const sectionStyles = {
				color: textColor || undefined,
			};

			const maskStyles = {
				backgroundColor: maskColor || undefined,
				opacity: 1 - maskOpacity,
			};

			return (
				<div className={ classes } style={ sectionStyles }>
					<div className={ bgvideoClasses }>
						{ videoURL && (
							<iframe
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								src={ `https://www.youtube.com/embed/${ getVideoId(
									videoURL
								) }?controls=0&autoplay=1&showinfo=0&rel=0&disablekb=1&iv_load_policy=3&loop=1&playlist=${ getVideoId(
									videoURL
								) }&playsinline=1&modestbranding=1` }
								width={ videoWidth }
								height={ videoHeight }
								frameBorder="0"
								title={ videoURL }
							/>
						) }
					</div>
					<div
						className="smb-section-with-bgimage__mask"
						style={ maskStyles }
					/>
					<div className="c-container">
						{ ! RichText.isEmpty( title ) && (
							<h2 className="smb-section__title">
								<RichText.Content value={ title } />
							</h2>
						) }
						<div className="smb-section__body">
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			);
		},
	},
];
