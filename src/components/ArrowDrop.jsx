import React from 'react';

const ArrowDrop = ({ percentage }) => {
  return (
    <React.Fragment>
      <span className="arrow arrow-drop">v {percentage + '%'}</span>
    </React.Fragment>
  );
};

export default ArrowDrop;
