import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const Button = ({value, onClick, className, disabled}) => (
    <input
        type = "submit"
        value={value}
        onClick={onClick}
        className={className}
        disabled={disabled}
    />
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button;
