import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import {useSelector, useDispatch } from "react-redux";
import { register } from '../../redux/actions/registrationActions';
import {FormRegistrationData} from "../../constants/publicInterfaces";



const RegistrationForm: React.FC= () => {
  const [formData, setFormData] = useState<FormRegistrationData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState<string>('');
  const registration = useSelector((state: any) => state.registration);

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
    dispatch<any>(register(formData));
  };


  return (
    <Container maxWidth="sm">
      <Typography variant="h4">User Registration</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
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
            Register
          </Button>
        </Box>
      </form>
      {!registration.register && (
        <Typography variant="body2" color="error" align="center">
          {registration.message}
        </Typography>
      )}
    </Container>
  );
};

export default RegistrationForm;
