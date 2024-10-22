import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import './App.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5000/users', {
        email,
        password,
      });
      if (response.status === 201) {
        alert('Signup successful');
        navigate('/login');
      }
    } catch (error) {
      alert('Signup failed');
    }
  };

  return (
    <Container maxWidth="sm" className="container">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4">Signup</Typography>
        <TextField
          className="text-field"
          fullWidth
          label="Username"
          onChange={(e) => setName(e.target.value)}
          value={name}
          margin="normal"
        />
        <TextField
          className="text-field"
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
        />
        <TextField
          className="text-field"
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />
        <Button className="button" onClick={handleSignup}>
          Signup
        </Button>
        <Button onClick={() => navigate('/login')} sx={{ ml: 2 }} className="button">
          Login
        </Button>
      </Box>
    </Container>
  );
}

export default Signup;
