import React from 'react';

function CarCard(props) {
  return (
    <div>
      <div className='card'>
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default CarCard;
