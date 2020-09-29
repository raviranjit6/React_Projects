import React from 'react';
import faker from 'faker';

const Button = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-6'>
          <button type='button' className='btn btn-warning'>
            {faker.name.jobArea()}
          </button>
        </div>
        <div className='col-sm-3'>
          <button type='button' className='btn btn-danger'>
            {faker.name.jobType()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Button;
