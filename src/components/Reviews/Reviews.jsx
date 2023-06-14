import { useParams } from 'react-router-dom';
import { getReviewsById } from 'components/Service/FetchApi';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const { movieId } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getReviewsById(movieId)
      .then(({ results }) => {
        setData(results);
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
              {data.map(({ id, author, content }) => {
                return (
                  <li key={id}>
                    <p>{author}</p>
                    <p>{content}</p>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>No reviews found.</p>
          )}
        </>
      )}
    </>
  );
};

export default Reviews;
