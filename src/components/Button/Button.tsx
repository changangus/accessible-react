import React from "react";
import { createUseStyles } from "react-jss";
import StyleTheme from "../../types/StyleTheme";

export interface ButtonProps {
  ariaLabel?: string;
  buttonClassNames?: string;
  onClick?: () => void;
  disabled?: boolean;
  buttonRef?: () => void;
  type?: "submit" | "button" | "reset";
  styleType?: "outlined" | "contained";
}

const Button: React.FC<ButtonProps> = ({
  children,
  ariaLabel,
  buttonClassNames,
  onClick,
  disabled,
  buttonRef,
  type,
  styleType = "contained",
}) => {

  const containedStyles = (theme: StyleTheme) => ({
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    opacity: "0.95",
    transition: "all 0.3s ease-in-out",
    // need to find out why we need to use the optional chaining operator here, but it is the only way to pass our tests without getting a type error. 
    backgroundColor: theme?.colors?.primary, 

    "&:hover": {
      opacity: "1",
      transform: "brightness(1.05)",
    },

    "&:active": {
      tranform: "scale(0.95)",
    }
  });

  const outlineStyles = (theme: StyleTheme) => ({
    backgroundColor: "transparent",
    color: theme.colors.primary,
    border: `4px solid ${theme.colors.primary}`,
    borderRadius: "10px",
  });

  const checkStyleType = (styleType: string, theme: StyleTheme) => {
    switch (styleType) {
      case "contained":
        return containedStyles(theme);
      case "outlined":
        return outlineStyles(theme);
      default:
        return containedStyles(theme);
    }
  };

  const styles = createUseStyles((theme: StyleTheme) => ({
    btnComponent: {
      width: "100%",
      height: "100%",
      cursor: "pointer",
      fontSize: "1rem",
      ...checkStyleType(styleType, theme),
    },
  }));
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
      <span>{children}</span>
    </button>
  );
};

export default Button;
