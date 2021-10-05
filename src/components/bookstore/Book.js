import React from 'react';
import propTypes from 'prop-types';

const Book = ({ title, author, categories }) => (
  <li>
    <p style={{ width: '10rem' }}>{title}</p>
    <p>{author}</p>
    <p>{categories}</p>
    <button type="button">remove</button>
  </li>
);

Book.propTypes = {
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  categories: propTypes.string.isRequired,
};

export default Book;
