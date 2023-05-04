import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <button type={props.type} className="button" onClick={(e) => props.func(e, props.content)}>
      Add Goals
    </button>
  );
};

export default Button;
