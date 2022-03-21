import React from "react";
import "./Die.css";

const Die = ({ face = "five", rolling }) => {
  return <i className={`Die fas fa-dice-${face} ${rolling && "shaking"}`} />;
};

export default Die;
