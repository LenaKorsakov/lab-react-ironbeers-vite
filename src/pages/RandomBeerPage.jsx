import { useState } from 'react';
import api from '../service/api';
import BeerDetailes from '../components/BeerDetailes/BeerDetailes';

function RandomBeersPage() {
  const [beer, setBeer] = useState(null);

  const fetchOneBeer = async () => {
    try {
      const data = await api.fetchRandomBeer();
      setBeer(data);
    } catch (error) {
      console.log(error);
    }
  };

  useState(() => {
    fetchOneBeer();
  }, []);

  if (!beer) {
    return <p>...Loading</p>;
  }

  return <BeerDetailes beer={beer} />;
}

export default RandomBeersPage;
