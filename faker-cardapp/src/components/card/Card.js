import React from 'react';
import faker from 'faker';

const Card = () => {
  return (
    <div>
      <img src={faker.random.image()} alt='CardImg' className='card-img-top' />
      <div className='card-body'>
        <h5 className='card-title'>{faker.name.firstName()}</h5>
        <p className='card-text'>{faker.address.country()}</p>
      </div>
    </div>
  );
};

export default Card;
