import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCreditsById } from 'components/Service/FetchApi';

const Cast = () => {
  const { movieId } = useParams();
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getCreditsById(movieId)
      .then(({ cast }) => {
        setdata(cast);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setLoading(false);
      });
  }, [movieId]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data.length > 0 ? (
            <ul>
              {data.map(({ id, profile_path, name, character }, index) => {
                const IMG = profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : null;
                return (
                  <li key={`${id}_${index}`}>
                    <img width="100" src={`${IMG}`} alt="" />
                    <p>{name}</p>
                    <p>Character: {character}</p>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>No cast members found.</p>
          )}
        </>
      )}
    </>
  );
};

export default Cast;
