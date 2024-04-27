import React from "react";
import { Link } from "react-router-dom";
import {useSearch} from "./SearchContext";

const Navbar = ({onLoginClick, onRegisterClick, onAgeCheck}) => {
  const { searchTerm, setSearchTerm } = useSearch();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <nav className="navbar navbar-expand-lg bg-secondary navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/TermekekPage"><i data-bs-toggle="tooltip" title="Hajrá!" className="bi bi-cart4"> </i> DrinkIt</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span  className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link data-bs-toggle="tooltip" title="Rólunk" className="nav-link active" to="/AboutPage">Főoldal</Link>
            </li>
            <li className="nav-item">
              <Link data-bs-toggle="tooltip" title="Elmúltál 18?"className="nav-link active" to="/AgeConfirmationModal" onClick={onAgeCheck}>Vásárlási feltételek</Link>
            </li>       
          </ul>
          <ul className="navbar-nav navbar-center">
          <li><Link to="/register" className="nav-link"><i className="fas fa-user"></i> Regisztráció</Link></li>
          <li><Link to="/login" className="nav-link"><i className="fas fa-sign-in-alt"></i> Bejelentkezés</Link></li>
        </ul>
        <form className="d-flex" onSubmit={handleSearchSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder=""
          aria-label="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="btn btn-outline-light" type="submit">Keresés</button>
      </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;