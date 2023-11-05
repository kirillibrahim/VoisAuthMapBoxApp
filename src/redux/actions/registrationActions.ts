import { Dispatch } from 'redux';
import { RegistrationActionTypes,  RegistrationAction } from '../types';
import axios from 'axios'; // Import Axios
import {FormRegistrationData} from "../../constants/publicInterfaces";

export const register = (formData: FormRegistrationData) => async (dispatch: Dispatch<RegistrationAction>) => {
  try {
    const response = await axios.post('http://localhost:3000/api/register', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(response);

    if (response.status === 201) {
      // User is authenticated
       dispatch({
        type: RegistrationActionTypes.REG_SUCCESS,
        payload: {register: true, message: 'User Registration is successfully'},
      });
     
     // return response;
    } else {
      // User authentication failed
       dispatch({
        type: RegistrationActionTypes.REG_FAILURE,
        payload: {register: false, message: 'User already exists'}, 
      });
      
     // return response;

    }
  } catch (error) {
    console.error('Error:', error);
     dispatch({
      type: RegistrationActionTypes.REG_FAILURE,
      payload: {register: false, message: 'An error occurred while registration.'},
    });


  }
};
