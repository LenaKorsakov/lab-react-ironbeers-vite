import axios from 'axios';
import apiRoutes from './api-routes';

const BACKEND_URL = 'https://ih-beers-api2.herokuapp.com/beers';
const REQUEST_TIMEOUT = 5000;

const api = axios.create({
  baseURL: BACKEND_URL,
  timeout: REQUEST_TIMEOUT,
});

api.fetchAllBeers = async function () {
  try {
    const { data } = await api.get(apiRoutes.DEFAULT);
    return data;
  } catch (error) {
    console.log(error);
  }
};

api.fetchRandomBeer = async function () {
  try {
    const { data } = await api.get(apiRoutes.RANDOM);
    return data;
  } catch (error) {
    console.log(error);
  }
};

api.fetchSpecificBeers = async function (id) {
  try {
    const { data } = await api.get(`/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

api.createNewBeer = async function (beer) {
  try {
    const { data } = await api.post(apiRoutes.NEW, beer);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default api;
