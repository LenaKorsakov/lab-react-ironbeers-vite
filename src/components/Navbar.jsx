import { Link, Outlet } from 'react-router-dom';
import appRoutes from '../app-routes';
import homePicture from '../assets/home-icon.png';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav>
        <Link to={appRoutes.DEFAULT}>
          <div>
            <img src={homePicture} alt="To home" />
          </div>
        </Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
