import './HomePage.css';
import beers from '../assets/beers.png';
import random from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';
import { Link } from 'react-router-dom';
import appRoutes from '../app-routes';

function HomePage() {
  return (
    <div className="HomePage">
      <div className="container">
        <Link to={appRoutes.ALL_BEERS}>
          <img src={beers} alt="beers" />
          <h2>All Beers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
            laborum. Consequatur aut reprehenderit repellat quo, itaque, facere
            fuga architecto non nihil cum sed temporibus fugit quaerat illum
            labore nemo aperiam?
          </p>
        </Link>
      </div>
      <div className="container">
        <Link to={appRoutes.RANDOM_BEER}>
          <img src={random} alt="beer-random" />
          <h2>Random Beer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
            laborum. Consequatur aut reprehenderit repellat quo, itaque, facere
            fuga architecto non nihil cum sed temporibus fugit quaerat illum
            labore nemo aperiam?
          </p>
        </Link>
      </div>
      <div className="container">
        <Link to={appRoutes.NEW_BEER}>
          <img src={newBeer} alt="beer-new" />
          <h2>New Beer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
            laborum. Consequatur aut reprehenderit repellat quo, itaque, facere
            fuga architecto non nihil cum sed temporibus fugit quaerat illum
            labore nemo aperiam?
          </p>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
