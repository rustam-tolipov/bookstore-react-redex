import React from 'react';
import Book from './Book';

const List = () => {
  const booksStore = [
    {
      index: 1,
      title: 'Ikki eshik orasida',
      author: 'O`.Xoshimov',
      categories: 'drama',
    },
    {
      index: 2,
      title: 'American tragedy',
      author: 'D.A',
      categories: 'thriller',
    },
    {
      index: 3,
      title: 'Digital forecast',
      author: 'Dan Brown',
      categories: 'adventure',
    },
  ];
  return (
    <ul>
      {booksStore.map((book) => (
        <Book
          key={book.index}
          title={book.title}
          author={book.author}
          categories={book.categories}
        />
      ))}
    </ul>
  );
};

export default List;
