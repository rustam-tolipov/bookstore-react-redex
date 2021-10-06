import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const Book = (props) => {
  const { book } = props;
  const { title, category, id } = book;
  const [bookTitle, author] = title.split('-');

  const dispatch = useDispatch();
  return (
    <div>
      <li>
        {bookTitle}
        <br />
        <p style={{ color: 'blue' }}>{author}</p>
        <br />
        {category}
        <button type="button" onClick={() => dispatch(removeBook(id))}>
          Delete
        </button>
      </li>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default Book;
