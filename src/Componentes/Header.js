import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="Apousada">A Pousada</NavLink>
        <NavLink to="Acomodacao">Acomodação</NavLink>
        <NavLink to="Lazer">Lazer</NavLink>
        <NavLink to="Contato">Contato</NavLink>
      </nav>
    </div>
  );
};

export default Header;
