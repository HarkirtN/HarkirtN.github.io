import React from "react";

interface Props {
  children: string;
  onCLick: () => void;
  color?: "primary" | "secondary" | "success";
}

const Button = ({ children, onCLick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn- " + color} onClicked={onclick}>
      {children}
    </button>
  ); // making it dynamic with children so you can put any text in button component
};

export default Button;

// "btn btn-primary" are from bootstrap for button and colour
