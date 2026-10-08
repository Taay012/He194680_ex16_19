import React from 'react';
import PropTypes from 'prop-types';
import './AnimalCard.css';

export default function AnimalCard({
  name,
  image,
  scientificName,
  size,
  diet,
  additional,
  showAdditional,
}) {
  return (
    <div className="animal-card">
      <img className="animal-photo" src={image} alt={name} />
      <div className="animal-body">
        <h2>{name}</h2>
        <ul className="animal-details">
          <li>Scientific Name: {scientificName}</li>
          <li>{size} kg</li>
          <li>{diet.join(', ')}.</li>
        </ul>
        <div className="animal-action">
          <button onClick={() => showAdditional(additional)}>More Info</button>
        </div>
      </div>
    </div>
  );
}

AnimalCard.propTypes = {
  image: PropTypes.string.isRequired,
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string,
  }),
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  showAdditional: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
};

AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information',
  },
};
