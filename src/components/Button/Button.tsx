import React from 'react';
import './Button.css';

export interface ButtonProps {
  ariaLabel?: string;
  buttonClassNames: string;
  onClick?: () => void;
  disabled?: boolean;
  buttonRef?: () => void;
  type?: 'submit' | 'button' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, ariaLabel, buttonClassNames, onClick, disabled, buttonRef, type }) => {
    return (
      <button 
        className={`btn-component ${buttonClassNames ? buttonClassNames : ''}`}
        aria-label={ariaLabel}
        disabled={disabled ? true : false}
        onClick={onClick}
        type={type}
        ref={buttonRef}
        >
        <span>
          { children }
        </span>
      </button>
    )
}

export default Button;
