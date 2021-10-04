import React from 'react';
import propTypes from 'prop-types';

const Book = ({
  id, title, author, categories,
}) => (
  <li style={{ width: '50rem' }} key={id} id={id}>
    <p style={{ width: '10rem' }}>{title}</p>
    <p>{author}</p>
    <p>{categories}</p>
    <button type="button">remove</button>
  </li>
);

Book.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  categories: propTypes.string.isRequired,
};

export default Book;
