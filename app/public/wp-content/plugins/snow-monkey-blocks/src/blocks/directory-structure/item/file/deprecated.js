import classnames from 'classnames';

import { RichText, useBlockProps } from '@wordpress/block-editor';

import metadata from './block.json';

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
			const classes = classnames(
				'smb-directory-structure__item',
				'smb-directory-structure__item--file',
				className
			);

			const itemNameClasses = 'smb-directory-structure__item__name';

			const iconStyles = {
				color: attributes.iconColor || undefined,
			};

			return (
				<div { ...useBlockProps.save( { className: classes } ) }>
					<p>
						<span className="fa-fw" style={ iconStyles }>
							<i
								className={ `${ attributes.iconVendor } fa-${ attributes.iconClass }` }
							/>
						</span>
						<span className={ itemNameClasses }>
							<RichText.Content value={ attributes.name } />
						</span>
					</p>
				</div>
			);
		},
	},
];
