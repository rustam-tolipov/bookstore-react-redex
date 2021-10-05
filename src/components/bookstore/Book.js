import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const BookItem = (props) => {
  const { book } = props;
  const {
    title, author, category, id,
  } = book;
  const dispatch = useDispatch();
  return (
    <div>
      <li>
        {title}
        <br />
        {author}
        <br />
        {category}
        <button type="button" onClick={() => dispatch(removeBook(id))}>
          Delete
        </button>
      </li>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default BookItem;
