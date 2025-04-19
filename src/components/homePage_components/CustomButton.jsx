import React from "react";
import "../../App.css";

const CustomButton = (props) => {
  return <div className="custom-button">{props.children}</div>;
};

export default CustomButton;
