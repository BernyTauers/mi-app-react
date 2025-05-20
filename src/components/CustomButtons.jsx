import React from 'react';
import Button from '@mui/material/Button';

export default function CustomButton({ children, onClick, variant = 'contained', color = 'primary', ...props }) {
  return (
    <Button onClick={onClick} variant={variant} color={color} {...props}>
      {children}
    </Button>
  );
}
