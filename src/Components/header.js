import React from "react";
import 'bulma/css/bulma.css';
const Header = () => {
  return (
    <div className="navbar is-primary">
      <div className="navbar-brand">
        <a className="navbar-item">
          <img src="logo.png" alt="logo"/>
        </a>
      </div>
    </div>
  );
}

export default Header;