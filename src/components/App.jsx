// import Home from './Pages/Home';
// import Movies from './Pages/Movies';
// import MovieDetails from './Pages/MovieDetails';
// import Layout from './Layout/Layout';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
// import css from './App.module.css';

const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));
const Home = lazy(() => import('./Pages/Home'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails'));
const Layout = lazy(() => import('./Layout/Layout'));
const Movies = lazy(() => import('./Pages/Movies'));

export const App = () => {
  return (
    // <div className={css.container}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
    // </div>
  );
};
