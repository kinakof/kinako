import classnames from 'classnames';

import {
	RichText,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';

export default function ( { attributes, className } ) {
	const classes = classnames(
		'smb-directory-structure__item',
		'smb-directory-structure__item--directory',
		className
	);

	const itemNameClasses = 'smb-directory-structure__item__name';

	const itemListClasses = 'smb-directory-structure__item__list';

	const styles = {
		'--smb-directory-structure--icon-color':
			attributes.iconColor || undefined,
	};

	return (
		<div { ...useBlockProps.save( { className: classes, style: styles } ) }>
			<p>
				<span className="fa-fw">
					<i
						className={ `${ attributes.iconVendor } fa-${ attributes.iconClass }` }
					/>
				</span>
				<RichText.Content
					tagName="span"
					className={ itemNameClasses }
					value={ attributes.name }
				/>
			</p>
			<div
				{ ...useInnerBlocksProps.save( {
					className: itemListClasses,
				} ) }
			/>
		</div>
	);
}
