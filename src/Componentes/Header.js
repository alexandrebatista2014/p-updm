import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Assets/Scss/App.scss';

const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="Apousada">A Pousada</NavLink>
      </nav>
      <h1>Header</h1>
    </div>
  );
};

export default Header;
