import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import css from './ SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState('');

  const [prevSearchName, setPrevSearchName] = useState('');

  const handleChangeName = e => {
    setSearchName(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchName.trim() === '') {
      console.log('write a search query');
      return;
    }
    if (searchName === prevSearchName) {
      return;
    }
    onSubmit(searchName);
    reset();
  };

  const reset = () => {
    setSearchName('');
    setPrevSearchName(searchName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChangeName}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={searchName}
      />
      <button type="submit">
        <span className="button-label">Search</span>
      </button>
    </form>
  );
};

export default SearchForm;
