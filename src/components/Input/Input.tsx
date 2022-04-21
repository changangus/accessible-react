import React from 'react';
import './Input.css';

export interface InputProps {
  value: string,
  htmlForAndInputId: string, 
  inputType: React.HTMLInputTypeAttribute,
  errorMessage: string, 
  errorId: string, 
  invalid: boolean,
  placeholder?: string,
  disabled: boolean, 
}

const Input: React.FC<InputProps> = ({ 
    value, 
    htmlForAndInputId, 
    inputType, 
    errorMessage, 
    errorId,
    invalid, 
    placeholder,
    disabled 
  }) => {
    return (
      <div className="root">
        <label htmlFor={htmlForAndInputId}></label>
        <input 
          value={value}
          id={htmlForAndInputId} 
          type={inputType} 
          placeholder={placeholder}
          disabled={disabled ? true : undefined}
          aria-describeby={errorId}
          aria-required="true"
          aria-invalid="true" />
        { 
          invalid && (
            <span id={errorId} aria-live="polite">{errorMessage}</span>
        )}
      </div>
    );
}

export default Input;