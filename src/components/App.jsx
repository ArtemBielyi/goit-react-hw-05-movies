import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
// import { getTrandingMoviesv } from './Service/Fetch';
// import SearchForm from './Searchform/Searchform';

export const App = () => {
  return (
    <div>
      <NavLink to="/">Home </NavLink>
      <NavLink to="/movies"> Movies</NavLink>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
};
