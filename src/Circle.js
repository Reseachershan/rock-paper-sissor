import React from 'react';

const Circle = ({className, image, handleCircle, color}) => {
  return (
    <div style={{ boxShadow: `inset 0rem 8px #0002, 0rem 8px ${color}` }} onClick={() =>handleCircle()} className={className} >
      <img className='m-auto' src={image} alt='Paper' />
    </div>
  );
}

export default Circle;
