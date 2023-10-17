import './AllBeerPage.css';
import { useState } from 'react';
import api from '../service/api';
import { Link } from 'react-router-dom';
import appRoutes from '../app-routes';

function AllBeersPage() {
  const [beers, setBeers] = useState(null);

  const fetchAllBeers = async () => {
    try {
      const data = await api.fetchAllBeers();
      setBeers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useState(() => {
    fetchAllBeers();
  }, []);

  if (!beers) {
    return <p>Loading...</p>;
  }
  return (
    <>
      {beers.map((beer) => {
        return (
          <article key={beer._id}>
            <div className="img__wrapper">
              <img src={beer.image_url} alt={beer.name} />
            </div>
            <div className="beer__container">
              <Link to={`${appRoutes.ALL_BEERS}/${beer._id}`}>
                <h2>{beer.name}</h2>
              </Link>
              <p>{beer.tagline}</p>
              <span>
                <b>Created by:</b> <span>{beer.contributed_by}</span>{' '}
              </span>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default AllBeersPage;
