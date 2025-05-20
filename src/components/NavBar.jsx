import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function NavBar({ user, onLogout }) {
  if (!user) return null;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
        <Button color="inherit" component={RouterLink} to="/dashboard">
          Dashboard
        </Button>
        <Button color="inherit" onClick={onLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
