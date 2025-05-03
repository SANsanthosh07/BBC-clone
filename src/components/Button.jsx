import React from "react";

import { Link } from "react-router-dom";
const Button = (props) => {
  const { onClick, className, label, linkText, linkTo } = props;
  return (
    <button onClick={onClick} className={className}>
      {label}
      <Link to={linkTo}>{linkText}</Link>
    </button>
  );
};

export default Button;
