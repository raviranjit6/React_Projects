import React from 'react';
import Card from './Card';
import Button from '../buttons/Button';

const CardLayout = () => {
  return (
    <div className='col-sm-3'>
      <div
        className='card text-white bg-primary mb-3'
        style={{
          maxWidth: '18rem',
          overflow: 'hidden',
          height: '20rem',
          border: 'none',
          outline: 'none',
        }}
      >
        <Card />
        <Button />
      </div>
    </div>
  );
};

export default CardLayout;
