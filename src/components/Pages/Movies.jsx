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
  // const {
  //   title,
  //   overview,
  //   genres,
  //   poster_path: path,
  //   vote_average: vote,
  //   release_date: release,
  // } = data;
  return (
    <div>
      <SearchForm onSubmit={handleFormSubmit} />

      {/* <h1>Search Results</h1> */}
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
