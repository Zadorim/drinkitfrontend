import React from "react";
import { Link } from "react-router-dom";
import {useSearch} from "./SearchContext";

const Navbar = ({onLoginClick, onRegisterClick}) => {
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
              <Link className="nav-link active" to="/AboutPage">Főoldal</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Termekek/TermekLista" >Termékek</Link>
            </li>       
          </ul>
          <ul className="navbar-nav navbar-center">          
          <li><button  className="nav-link btn btn-link text-white" onClick={onRegisterClick} style={{ background: 'img-fluid', border: '5px', padding: 0 }}><i className="bi bi-person-fill"></i> Regisztráció</button></li>
          <li><button  className="nav-link btn btn-link text-white" onClick={onLoginClick} style={{ background: 'none', border: 'none', padding: 0 }}><i className="bi bi-person-add"></i> Bejelentkezés</button></li>
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
        <button id='navkereses' className="btn btn-outline-light" type="submit">Keresés</button>
      </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;