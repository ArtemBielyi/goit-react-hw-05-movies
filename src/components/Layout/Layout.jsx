import { NavLink, Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div>
      <NavLink to="/">Home </NavLink>
      <NavLink to="/movies"> Movies</NavLink>
      <Outlet />
    </div>
  );
};
export default Layout;
