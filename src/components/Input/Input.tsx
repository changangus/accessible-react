import React from "react";
import { createUseStyles } from "react-jss";
import "./Input.css";

export interface InputProps {
  value: string;
  htmlForAndInputId: string;
  inputType: React.HTMLInputTypeAttribute;
  errorMessage: string;
  errorId: string;
  invalid: boolean;
  placeholder?: string;
  disabled: boolean;
}

const Input: React.FC<InputProps> = ({
  value,
  htmlForAndInputId,
  inputType,
  errorMessage,
  errorId,
  invalid,
  placeholder,
  disabled,
}) => {

  const styles = createUseStyles({
    input: {
      border: "1px solid #ccc",
      borderRadius: "4px",
      padding: "12px 20px",
      margin: "8px 0",
    },
    error: {
      color: "red",
      fontSize: "12px",
      margin: "4px 0",
    },
  });

  const classes = styles();

  return (
    <>
      <label htmlFor={htmlForAndInputId}></label>
      <input
        className={classes.input}
        value={value}
        id={htmlForAndInputId}
        type={inputType}
        placeholder={placeholder}
        disabled={disabled ? true : undefined}
        aria-describeby={errorId}
        aria-required="true"
        aria-invalid="true"
      />
      {invalid && (
        <span id={errorId} aria-live="polite">
          {errorMessage}
        </span>
      )}
    </>
  );
};

export default Input;
