import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const SquareWithImage = ({img, commented, hide}) => (
	<div className={`${style.squareWrapper} ${hide}`}>
			<div><img  className={style.squareImage} src={img} /></div>
		<div className={style.placeholder}>
			{commented ? 'COMMENTED' : 'ANSWERED'}
		</div>
		<span className={commented ? style.circle : style.darkCircle}></span>
	</div>
);

SquareWithImage.propTypes = {
	img: PropTypes.object,
	commented: PropTypes.string,
	hide: PropTypes.string
};

export default SquareWithImage;
