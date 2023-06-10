import { useEffect, useState } from 'react';
import { getTrandingMovies } from '../Service/FetchApi';
const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getTrandingMovies(setData)
      .then(results => {
        setData(results);
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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
