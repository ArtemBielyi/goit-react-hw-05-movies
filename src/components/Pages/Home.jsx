import { Link, useLocation } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../Service/FetchApi';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getTrendingMovies()
      .then(data => {
        setData(data.results);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {loading ? <p>Loading...</p> : <MovieList data={data} />}
    </div>
  );
};

export default Home;
