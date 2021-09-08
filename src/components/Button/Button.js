import React from "react";
import { ButtonStyled } from "./Button.style";

const Button = ({ children, onClick, type, margin, bg, color }) => {
  return (
    <ButtonStyled
      backgroundColor={bg}
      color={color}
      margin={margin}
      onClick={onClick}
      type={type}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
