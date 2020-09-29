import React from 'react';
import Card from './Card';

const CardLayout = () => {
  return (
    <div className='col-sm-3'>
      <div
        className='card text-white bg-primary mb-3'
        style={{ maxWidth: '18rem' }}
      >
        <Card />
      </div>
    </div>
  );
};

export default CardLayout;
