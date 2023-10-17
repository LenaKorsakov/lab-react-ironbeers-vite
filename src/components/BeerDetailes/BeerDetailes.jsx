import './BeerDetails.css';

function BeerDetailes({ beer }) {
  return (
    <div className="BeerDetailes">
      <div className="img__wrapper">
        <img src={beer.image_url}></img>
      </div>
      <div className="details__container">
        <h1>{beer.name}</h1>
        <span className="level">{beer.attenuation_level}</span>
      </div>
      <div className="details__container">
        <h2>{beer.tagline}</h2>
        <b>{beer.first_brewed}</b>
      </div>
      <p>{beer.description}</p>
      <small>{beer.contributed_by}</small>
    </div>
  );
}

export default BeerDetailes;
