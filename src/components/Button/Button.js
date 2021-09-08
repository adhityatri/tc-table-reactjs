import React from "react";
import { ButtonStyled } from "./Button.style";

const Button = ({ children, onClick, type, margin, bg, color, isDisabled }) => {
  return (
    <ButtonStyled
      backgroundColor={bg}
      color={color}
      margin={margin}
      onClick={onClick}
      type={type}
      disabled={isDisabled}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
