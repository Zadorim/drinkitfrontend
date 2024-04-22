import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({onAgeCheck}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/termekek"><i className="bi bi-cart4"></i> DrinkIt</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/about">Főoldal</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="#" onClick={onAgeCheck}>Vásárlási feltételek</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/categories" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Kategóriák
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/category1">Szeszes italok</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category2">Pálinka</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category3">Sör, cider</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category4">Borok és pezsgők</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category5">Különlegességek</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category6">Akciós termékek</NavLink></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-light" type="submit">Keresés</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;