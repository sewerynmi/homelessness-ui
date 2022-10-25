import React from 'react';

const ArrowUp = ({ percentage }) => {
  return (
    <React.Fragment>
      <span className="arrow arrow-up">^ {percentage + '%'}</span>
    </React.Fragment>
  );
};

export default ArrowUp;
