import React from 'react';

const Input = () => {
  return (
    <form>
      <input type="text" placeholder="Book Title" />
      <input type="text" placeholder="Categories" />
      <button type="button">Add Book</button>
    </form>
  );
};

export default Input;
