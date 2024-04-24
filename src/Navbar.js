import React from "react";
import { Link } from "react-router-dom";
import {useSearch} from "./SearchContext";

const Navbar = ({onAgeCheck}) => {
  const { searchTerm, setSearchTerm } = useSearch();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/TermekekPage"><i className="bi bi-cart4"></i> DrinkIt</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/AboutPage">Főoldal</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/AgeConfirmationModal" onClick={onAgeCheck}>Vásárlási feltételek</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/Categories" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Kategóriák
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/Category1">Szeszes italok</Link></li>
                <li><Link className="dropdown-item" to="/Category2">Pálinka</Link></li>
                <li><Link className="dropdown-item" to="/Category3">Sör, cider</Link></li>
                <li><Link className="dropdown-item" to="/Category4">Borok és pezsgők</Link></li>
                <li><Link className="dropdown-item" to="/Category5">Különlegességek</Link></li>
                <li><Link className="dropdown-item" to="/Category6">Akciós termékek</Link></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearchSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
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