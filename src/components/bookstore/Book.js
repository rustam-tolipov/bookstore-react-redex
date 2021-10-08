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
    <div className="cards">
      <li className="card">
        <div className="info">
          <p className="card__c-name">{category}</p>
          <p className="card__book-title">{bookTitle}</p>

          <p className="card__author">{author}</p>
          <div className="card__buttons">
            <button type="button">Comments</button>
            <button type="button" onClick={() => dispatch(removeBook(id))}>
              Remove
            </button>
            <button type="button">Edit</button>
          </div>
        </div>
        <div className="progress__container">
          <div className="oval" />
          <div className="progress">
            <h1 className="progress__percent">64%</h1>
            <p className="progress__complete">Completed</p>
          </div>
        </div>

        <div className="chapter">
          <p className="chapter__text">Current chapter</p>
          <p className="chapter__name">Chapter 17</p>
          <button className="chapter__btn" type="button">
            update progress
          </button>
        </div>
      </li>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default Book;
