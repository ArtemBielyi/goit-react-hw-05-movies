import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getMovieById } from '../Service/FetchApi';
// import BackBtn from 'components/BackBtn';
// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  console.log(location);
  const prevLocation = useRef(location?.state?.from ?? '/movies');

  useEffect(() => {
    setLoading(true);

    getMovieById(movieId)
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        alert('error:', error);
        setLoading(false);
      });
  }, [movieId]);

  const {
    title,
    overview,
    genres,
    poster_path: path,
    vote_average: vote,
    release_date: release,
  } = data;

  const rating = vote?.toFixed(1);
  const releaseDate = `(${release?.slice(0, 4)})`;

  const imgPath = path ? `https://image.tmdb.org/t/p/w500${path}` : null;

  return (
    <div>
      <Link to={prevLocation.current}>Back</Link>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>
            {title} {releaseDate}
          </h1>
          <p>Overview: {overview}</p>
          <p>Genres: {genres && genres.map(genre => genre.name).join(', ')}</p>
          <img src={imgPath} alt="" width={250} height={350} />

          {vote && <p>User Score: {rating} / 10</p>}
          <ul>
            <li>
              <Link to={'cast'}>Cast</Link>
            </li>
            <li>
              <Link to={'reviews'}>Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default MovieDetails;
