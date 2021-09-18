import React from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  return (
    <header className="navbar d-flex  justify-content-center align-items-center sticky-sm-top bg-white">
      <h1 className="d-inline nav-item fs-2 me-auto">
        <NavLink exact to="/" className="navbar-brand text-decoration-none text-dark">
          Covid 19 Viewer
        </NavLink>
      </h1>
      
      
      <NavLink to="/latest" activeClassName="active" className="text-decoration-none  text-muted nav-item p-2 bd-highlight">
        Latest
      </NavLink>
      <NavLink to="/daily" activeClassName="active" className="text-decoration-none  text-muted nav-item p-2 bd-highlight">
        Daily
      </NavLink>
      <NavLink to="/compare" activeClassName="active" className="text-decoration-none text-muted nav-item p-2 bd-highlight">
        Compare
      </NavLink>

      <Search className="nav-item"/>
      
    </header>
  );
};

export default Header;
