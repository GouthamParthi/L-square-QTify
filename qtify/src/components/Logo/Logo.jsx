import React from "react";
const logo = require("../../assets/Logo.png");
function Logo() {
  return (
    <div>
      <img src={logo} alt="logo" width={67} height={34} />
    </div>
  );
}

export default Logo;
