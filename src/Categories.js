import React from 'react';
import { Link } from 'react-router-dom';

const categories = ["Szeszes italok", "Pálinka", "Sör, cider", "Borok és pezsgők", "Különlegességek", "Akciós termékek"];

const Categories = () => {
  return (
    <div>
      <h1>Kategóriák</h1>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        {categories.map(category => (
          <React.Fragment key={category}>
          <li>{category}</li>
          <li><Link className="dropdown-item" to="/Category1" >Szeszes italok</Link></li>
          <li><Link className="dropdown-item" to="/Category2">Pálinka</Link></li>
          <li><Link className="dropdown-item" to="/Category3">Sör, cider</Link></li>
          <li><Link className="dropdown-item" to="/Category4">Borok és pezsgők</Link></li>
          <li><Link className="dropdown-item" to="/Category5">Különlegességek</Link></li>
          <li><Link className="dropdown-item" to="/Category6">Akciós termékek</Link></li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default Categories;