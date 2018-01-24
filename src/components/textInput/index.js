import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const TextInput = ({
  htmlId,
  required="false",
  type="text",
  name, value,
  placeholder,
  callback,
  inputWrapper,
  error,
  children}) => {
  return (
    <div className={style.input}>
       <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={callback}
          className={`${error && `{style.bordeError}`} ${inputWrapper}`}
       />
       {children}
       {error && <div className={style.error}>{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
    htmlId: PropTypes.string.isRequired,
    required: PropTypes.bool,
    type: PropTypes.oneOf(['text','number', 'password']),
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    callback:PropTypes.func.isRequired,
    inputWrapper: PropTypes.string,
    error: PropTypes.string,
    children:PropTypes.node
};

export default TextInput;
