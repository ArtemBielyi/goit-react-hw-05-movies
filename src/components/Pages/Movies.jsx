import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import SearchForm from '../Searchform/Searchform';
import { getSearchMovies } from '../Service/FetchApi';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const handleFormSubmit = searchMovieId => {
    if (!searchMovieId) return setSearchParams({});

    setSearchParams({ movieId: searchMovieId });
  };
  const movieId = searchParams.get(`movieId`) ?? '';

  useEffect(() => {
    if (!movieId) return;
    setLoading(true);

    getSearchMovies(movieId)
      .then(({ results }) => {
        if (!results.length) {
          setSearchParams({});
          alert(`there is no movie with the "${movieId}"`);
        }
        setData(results);
      })
      .catch(error => alert('error:' + error))
      .finally(setLoading(false));
  }, [movieId, setSearchParams]);

  return (
    <div>
      <SearchForm onSubmit={handleFormSubmit} />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
