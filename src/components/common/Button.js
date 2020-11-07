import React from 'react';
import BootstrapButton from 'react-bootstrap/Button';

const Button = ({ text, onClick, disabled, variant, size }) => {
  return (
    <BootstrapButton onClick={onClick} disabled={disabled} variant={variant} size={size} className="d-print-none">
      {text}
    </BootstrapButton>
  );
};

export default Button;
