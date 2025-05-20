import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import CustomButton from '../components/CustomButtons';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" mb={2}>
        Contador
      </Typography>
      <Typography paragraph>
        Has hecho clic {count} {count === 1 ? 'vez' : 'veces'}.
      </Typography>
      <CustomButton onClick={() => setCount(count + 1)}>
        Incrementar contador
      </CustomButton>
    </Box>
  );
}