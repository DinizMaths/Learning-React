import React from 'react';

function Box(props) {
  return (
    <div 
      id={props.id} 
      style={{
        height: '4rem',
        width: '9rem',
        border: '3px solid white',
        borderRadius : `${props.radius}px`
      }}
    >
    </div>
  );
}

export default Box;