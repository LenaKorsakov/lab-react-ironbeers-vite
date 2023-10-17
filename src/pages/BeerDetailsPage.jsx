import { useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../service/api';
import BeerDetailes from '../components/BeerDetailes/BeerDetailes';

function BeerDetailsPage() {
  const [beer, setBeer] = useState(null);
  const params = useParams();

  const fetchOneBeer = async () => {
    try {
      const data = await api.fetchSpecificBeers(params.beerId);
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

export default BeerDetailsPage;
