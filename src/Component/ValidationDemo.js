import React from 'react';
import AnimalCard from './AnimalCard.js';
import animals from '../data.js';

function showAdditionalData(additional) {
  const data = additional || { notes: 'No Additional Information' };
  const message = Object.entries(data)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  alert(message);
}

function ValidationDemo() {
  return (
    <div className="animals-demo">
      <h1>Animals</h1>
      <div className="animal-list">
      {animals.map(animal => (
        <AnimalCard
          key={animal.name}
          name={animal.name}
          image={animal.image}
          scientificName={animal.scientificName}
          size={animal.size}
          diet={animal.diet}
          additional={animal.additional}
          showAdditional={showAdditionalData}
        />
      ))}
      </div>
    </div>
  );
}

export default ValidationDemo;
