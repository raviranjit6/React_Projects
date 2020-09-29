import React from 'react';
import faker from 'faker';

const Card = () => {
  return (
    <div>
      <img
        src={faker.random.image()}
        alt='CardImg'
        className='card-img-top img-fluid rounded'
        style={{ height: '15rem' }}
      />
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
            <h5 className='card-title'>{faker.name.firstName()}</h5>
          </div>
          <div className='col-sm-3'>
            <p className='card-text'>{faker.address.cityPrefix()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
