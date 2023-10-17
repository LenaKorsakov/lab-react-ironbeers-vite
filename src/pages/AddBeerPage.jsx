import { useState } from 'react';
import './AddBeerPage.css';
import api from '../service/api';

const initialState = {
  name: '',
  tagline: '',
  description: '',
  first_brewed: '',
  brewers_tips: '',
  attenuation_level: 0,
  contributed_by: '',
};

function AddBeerPage() {
  const [formData, setFormData] = useState(initialState);

  const handleInput = (event) => {
    const key = event.target.id;
    const value = event.target.value;

    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const postNewBeer = async () => {
    try {
      await api.createNewBeer(formData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    postNewBeer();
    setFormData(initialState);
  };

  return (
    <div className="AddBeerPage">
      <form onSubmit={handleSubmit}>
        <div className="input__wrapper">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInput}
            required
          />
        </div>

        <div className="input__wrapper">
          <label htmlFor="tagline">Tagline</label>
          <input
            type="text"
            id="tagline"
            value={formData.tagline}
            onChange={handleInput}
            required
          />
        </div>

        <div className="input__wrapper">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            id="description"
            rows={10}
            value={formData.description}
            onChange={handleInput}
            required
          />
        </div>

        <div className="input__wrapper">
          <label htmlFor="first_brewed">First Brewed</label>
          <input
            type="text"
            id="first_brewed"
            value={formData.first_brewed}
            onChange={handleInput}
            required
          />
        </div>

        <div className="input__wrapper">
          <label htmlFor="brewers_tips"> Brewers Tips</label>
          <input
            type="text"
            id="brewers_tips"
            value={formData.brewers_tips}
            onChange={handleInput}
            required
          />
        </div>

        <div className="input__wrapper">
          <label htmlFor="attenuation_level"> Attenuation Level</label>
          <input
            type="number"
            id="attenuation_level"
            value={formData.attenuation_level}
            onChange={handleInput}
            required
          />
        </div>

        <div className="input__wrapper">
          <label htmlFor="contributed_by">Contributed By</label>
          <input
            type="text"
            id="contributed_by"
            value={formData.contributed_by}
            onChange={handleInput}
            required
          />
        </div>
        <div className="input-wrapper">
          <button type="submit" className="btn-submit">
            ADD NEW
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBeerPage;
