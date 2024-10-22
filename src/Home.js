import React from 'react';
import { Typography, Container, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" className="container">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4">Welcome to the Stock Management System</Typography>
        <Typography>Manage your stock efficiently and effectively!</Typography>
        <Button onClick={() => navigate('/dashboard')} className="button">
          Go to Dashboard
        </Button>
        
        <Button onClick={() => navigate('/login')} className="logout-btn">
          Logout
        </Button>
      </Box>
    </Container>
  );
}

export default Home;
