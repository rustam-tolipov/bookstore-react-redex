import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { loaded } from '../../redux/books/books';

function List() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loaded());
  }, []);

  const books = useSelector((state) => state.books);
  return (
    <ul className="cards__list">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </ul>
  );
}

export default List;
