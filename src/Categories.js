import React from 'react';

const categories = ["Szeszes italok", "Pálinka", "Sör, cider", "Borok és pezsgők", "Különlegességek", "Akciós termékek"];

const Categories = () => {
  return (
    <div>
      <h1>Kategóriák</h1>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        {categories.map(category => (
          <React.Fragment key={category}>
          <li>{category}</li>
          <li><a className="dropdown-item" href="">Szeszes italok</a></li>
          <li><a className="dropdown-item" href="">Pálinka</a></li>
          <li><a className="dropdown-item" href="">Sör, cider</a></li>
          <li><a className="dropdown-item" href="">Borok és pezsgők</a></li>
          <li><a className="dropdown-item" href="">Különlegességek</a></li>
          <li><a className="dropdown-item" href="">Akciós termékek</a></li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default Categories;