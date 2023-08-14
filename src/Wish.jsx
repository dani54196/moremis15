import React from 'react';

const Wish = ({ name }) => {
  return (
    <div className='wish-message'>
      Felices quinces <span className='highlight'>{name.toUpperCase()}</span> !!!
    </div>
  );
};

export default Wish;
