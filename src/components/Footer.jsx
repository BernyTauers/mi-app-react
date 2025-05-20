import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ p: 2, textAlign: 'center', borderTop: '1px solid #ccc', mt: 'auto' }}>
      <Typography variant="body2" color="text.secondary">
        &copy; 2025 My App. Todos los derechos reservados.
      </Typography>
    </Box>
  );
}
