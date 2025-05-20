import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { TextField, Box, Typography, Alert } from '@mui/material';
import CustomButton from '../components/CustomButtons';

export default function Login({ user, onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (username === 'admin' && password === '1234') {
      onLogin({ username });
    } else {
      setError('Credenciales incorrectas');
    }
  };

  if (user) return <Navigate to="/" replace />;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 360,
        mx: 'auto',
        mt: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" component="h1" align="center">
        Login
      </Typography>
      <TextField
        label="Usuario"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Contraseña"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        fullWidth
      />
      {error && <Alert severity="error">{error}</Alert>}
      <CustomButton type="submit" fullWidth>
        Ingresar
      </CustomButton>
    </Box>
  );
}
