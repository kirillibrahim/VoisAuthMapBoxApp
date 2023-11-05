

import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import RegistrationSuccess from './RegistrationSuccess';
import {useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

const Registration: React.FC = () =>  {
  const [isRegistered, setIsRegistered] = useState(false);
  const isAuthenticated = useSelector((state: any) => state.login);
  const registration = useSelector((state: any) => state.registration);

  console.log(registration);

  if(isAuthenticated.isAuthenticated){
    return <Redirect to="/map" />;
  }

  return (
    <div>
      {registration.register ? (
        <RegistrationSuccess />
      ) : (
        <RegistrationForm  />
      )}
    </div>
  );
}

export default Registration;