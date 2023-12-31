import classnames from 'classnames';

import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function ( { attributes, className } ) {
	const { title, rating, color } = attributes;

	const classes = classnames( 'smb-rating-box__item', className );

	const styles = {
		'--smb-rating-box--rating-background-color': color || undefined,
	};

	const itemEvaluationRatingStyles = {
		width: `${ rating * 10 }%`,
	};

	return (
		<div { ...useBlockProps.save( { className: classes, style: styles } ) }>
			<div className="smb-rating-box__item__title">
				<RichText.Content value={ title } />
			</div>

			<div className="smb-rating-box__item__evaluation">
				<div className="smb-rating-box__item__evaluation__bar">
					<div className="smb-rating-box__item__evaluation__numeric">
						{ rating }
					</div>
					<div
						className="smb-rating-box__item__evaluation__rating"
						style={ itemEvaluationRatingStyles }
					/>
				</div>
			</div>
		</div>
	);
}
