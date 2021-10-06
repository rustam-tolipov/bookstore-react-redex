import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

function Input() {
  const dispatch = useDispatch();

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');
  const [enteredCategory, setEnteredCategory] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newBook = {
      id: uuidv4(),
      title: `${enteredTitle} - ${enteredAuthor}`,
      category: enteredCategory,
    };

    dispatch(addBook(newBook));
    setEnteredTitle('');
    setEnteredAuthor('');
    setEnteredCategory('');
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input name="title" value={enteredTitle} type="text" placeholder="Book title" onChange={titleChangeHandler} />
        <input name="title" value={enteredAuthor} type="text" placeholder="Author" onChange={authorChangeHandler} />
        <select name="category" value={enteredCategory} id="categories" onChange={categoryChangeHandler}>
          <option value="Romance">Romance</option>
          <option value="Mystery">Mystery</option>
          <option value="Fantasy and science fiction">Fantasy and science fiction</option>
          <option value="Thrillers and horror">Thrillers and horror</option>
        </select>
        <button type="button" onClick={submitHandler}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default Input;
