import React from 'react';
import Alert from 'react-bootstrap/Alert';

const Banner = ({ text }) => {
  return (
    <Alert variant="danger" className="banner">
      <p>{text}</p>
    </Alert>
  );
};

export default Banner;
