import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import {useSelector, useDispatch } from "react-redux";
import { login } from '../../redux/actions/loginActions';
import {FormLoginData} from "../../constants/publicInterfaces";
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormLoginData>({
    email: '',
    password: '',
  });

  const [error, setError] = useState<string>('');
  const isAuthenticated = useSelector((state: any) => state.login);
  console.log(isAuthenticated);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 

  const dispatch = useDispatch();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields.');
      return;
    }

    // Dispatch the login action
    dispatch<any>(login(formData));
  };

  if(isAuthenticated.isAuthenticated){
    return <Redirect to="/map" />;
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
          <div style={{ marginTop: "15px" }}>
            <Link
              to="/registration"
              style={{color: "#1565c0"}}
            >
            Registration 
            </Link>
          </div>
          
        </Box>
      </form>
      {isAuthenticated.error && (
        <Typography variant="body2" color="error" align="center">
          {isAuthenticated.error}
        </Typography>
      )}
    </Container>
  );
};

export default Login;
