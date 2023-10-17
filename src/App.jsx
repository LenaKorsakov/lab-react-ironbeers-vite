import { Route, Routes } from 'react-router-dom';
import './App.css';
import appRoutes from './app-routes';
import AddBeerPage from './pages/AddBeerPage';
import AllBeersPage from './pages/AllBeersPage';
import BeerDetailsPage from './pages/BeerDetailsPage';
import HomePage from './pages/HomePage';
import RandomBeerPage from './pages/RandomBeerPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Routes>
        <Route path={appRoutes.DEFAULT} element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path={appRoutes.ALL_BEERS} element={<AllBeersPage />} />
          <Route path={appRoutes.RANDOM_BEER} element={<RandomBeerPage />} />
          <Route path={appRoutes.NEW_BEER} element={<AddBeerPage />} />
          <Route
            path={`${appRoutes.ALL_BEERS}/:beerId`}
            element={<BeerDetailsPage />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
