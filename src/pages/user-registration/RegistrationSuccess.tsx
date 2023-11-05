import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
function RegistrationSuccess() {
  return (
    <div>
      <Typography variant="h4">Registration Successful</Typography>
      <Typography variant="body1">Thank you for registering.</Typography>
      <Link to="/" style={{color: "#1565c0"}} >
        please Login
      </Link>
    </div>
  );
}

export default RegistrationSuccess;
