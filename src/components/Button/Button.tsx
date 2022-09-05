import React from 'react';
import { createUseStyles } from 'react-jss';

export interface ButtonProps {
  ariaLabel?: string;
  buttonClassNames?: string;
  onClick?: () => void;
  disabled?: boolean;
  buttonRef?: () => void;
  type?: 'submit' | 'button' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, ariaLabel, buttonClassNames, onClick, disabled, buttonRef, type }) => {
    const styles = createUseStyles({
        btnComponent: {
          width: '100%',
          height: '100%',
          backgroundColor: 'blue',
          border: 'none',
          borderRadius: '5px',
          boxShadow: '3px 2px 6px 3px grey',
          cursor: 'pointer',
          fontSize: '1rem',

          '& active': {
             boxShadow: '2px 1px 4px 2px grey',
             transform: 'scale(.996)',
          }
        },

    });
    const classes = styles();
    return (
      <button 
        className={`${classes.btnComponent} ${buttonClassNames}`}
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
