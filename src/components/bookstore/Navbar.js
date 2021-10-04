import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const pages = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <div>
      <ul>
        <h1>BookStore CMD</h1>
        {pages.map((page) => (
          <li key={page.id}>
            <NavLink to={page.path} activeClassName="active-link" exact>
              {page.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
