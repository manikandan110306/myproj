import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import './App.css'; // Import the CSS file here too if required for specific component styles

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Fetch the users from db.json
      const response = await axios.get('http://localhost:5000/users');
      const users = response.data; // Array of users
      
      // Check if the entered email and password match any user in db.json
      const user = users.find((user) => user.email === email && user.password === password);

      if (user) {
        alert('Login successful');
        navigate('/home');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      alert('Login failed due to server error');
    }
  };

  return (
    <Container maxWidth="sm" className="container">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4">Login</Typography>
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
        <Button className="button" onClick={handleLogin}>
          Login
        </Button>
        <Button onClick={() => navigate('/signup')} sx={{ ml: 2 }} className="button">
          Signup
        </Button>
      </Box>
    </Container>
  );
}

export default Login;
