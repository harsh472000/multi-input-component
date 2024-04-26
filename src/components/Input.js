import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/input.scss";
import { FaTimesCircle, FaEye, FaEyeSlash } from "react-icons/fa";

const Input = ({
  type,
  label,
  placeholder,
  defaultValue,
  helpText,
  id,
  onChange,
  icon,
  prefix,
  suffix,
  allowClear,
  autoComplete,
  characterLimit,
  status,
  variant,
  error,
}) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleInputChange = (e) => {
    const { value } = e.target;
    // If characterLimit is defined and value length is greater, prevent the update
    if (characterLimit && value.length > characterLimit) {
      return;
    }
    setInputValue(value);
    if (typeof onChange === "function") {
      onChange(e);
    }
  };

  const handleClearInput = () => {
    setInputValue("");
    if (typeof onChange === "function") {
      onChange({ target: { name: id, value: "" } });
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible); // Toggle the password visibility state
  };

  const getStatusClassName = () => {
    const statusMap = {
      error: "error",
      success: "success",
      hover: "hover",
      disabled: "disabled"
    };

    return Object.keys(statusMap)
      .filter((key) => status.includes(key))
      .map((key) => statusMap[key])
      .join(" ");
  };
  const inputClasses = [
    'input-field',
    getStatusClassName(),
    prefix && 'has-prefix',
    suffix && 'has-suffix',
    icon && 'has-icon',
    variant === 'floating' && 'floating',
  ].filter(Boolean).join(' ');
  

  return (
    <div className={`input-container ${variant}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <div className="input-group">
        {prefix && <span className="input-prefix">{prefix}</span>}
        {icon && <span className="input-icon">{icon}</span>}
        <input
          type={
            type === "password"
              ? isPasswordVisible
                ? "text"
                : "password"
              : type
          }
          id={id}
          placeholder={variant==="floating" ? "" : placeholder}
          value={inputValue}
          onChange={handleInputChange}
          disabled={status.includes("disabled")}
          readOnly={status.includes("readOnly")}
          autoComplete={autoComplete}
          aria-label={label ? label : "Input"}
          tabIndex={0}
          className={inputClasses}
        />
        {variant==="floating" && (<label className="floating-label">{placeholder}</label>)}
        {type === "password" && ( 
          <span
            className="password-toggle-icon"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
          </span>
        )}
        {allowClear && inputValue && (
          <FaTimesCircle
            className="input-clear-icon"
            onClick={handleClearInput}
          />
        )}
        {suffix && <span className="input-suffix">{suffix}</span>}
      </div>
      {(helpText || error || characterLimit) && (
      <div className="input-info">
        <div>
          {helpText && <div className="help-text">{helpText}</div>}
          {error && <div className="error-text">{error}</div>}
        </div>
        {characterLimit && (
          <div className="character-count">
            {`${inputValue.length}/${characterLimit}`}
          </div>
        )}
      </div>
    )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  helpText: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  icon: PropTypes.node,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  allowClear: PropTypes.bool,
  autoComplete: PropTypes.string,
  characterLimit: PropTypes.number,
  status: PropTypes.string,
  variant: PropTypes.string,
  error: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  defaultValue: "",
  allowClear: false,
  status: "default",
  variant: "normal",
  error: "",
};

export default Input;
