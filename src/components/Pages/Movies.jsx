import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchForm from '../Searchform/Searchform';
import { getSearchMovies } from '../Service/FetchApi';

const Movies = () => {
  const [searchName, setSearchName] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = searchName => {
    setSearchName(searchName);
  };

  useEffect(() => {
    setLoading(true);

    getSearchMovies(searchName)
      .then(data => {
        setData(data.results);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setLoading(false);
      });
  }, [searchName]);

  return (
    <div>
      <SearchForm onSubmit={handleFormSubmit} />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
