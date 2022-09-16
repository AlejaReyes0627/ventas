import React from "react";
import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <nav className="panel is-link">
      <p className="panel-heading " style={{color:'black', textAlign:"center"}}>Menu</p>
      <div className="panel-block ">
        <Link to="/" className="button is-fullwidth is-link is-light is-focused">
          <span className="icon">
            <i className="fas fa-home"></i>
          </span>
          <span>Inicio</span>
        </Link>
      </div>
      <div className="panel-block ">
        <Link to="/Clientes" className="button is-fullwidth  is-link is-light is-focused">
          <span className="icon">
            <i className="fas fa-users"></i>
          </span>
          <span>Clientes</span>
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
