import React from 'react';

const Time = () => {
  const time = new Date();
  return (
    <p>
      This is time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}
    </p>
  );
};

export default Time;
