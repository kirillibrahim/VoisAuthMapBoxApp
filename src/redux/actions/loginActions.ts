import { Dispatch } from 'redux';
import { LoginActionTypes, LoginAction } from '../types';
import axios from 'axios'; // Import Axios
import {FormLoginData} from "../../constants/publicInterfaces";

export const login = (formData: FormLoginData) => async (dispatch: Dispatch<LoginAction>) => {
  try {
    const response = await axios.post('http://localhost:3000/api/login', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    if (response.status === 200) {
      // User is authenticated
       dispatch({
        type: LoginActionTypes.LOGIN_SUCCESS,
      });
      //localStorage.setItem('token', JSON.stringify(token));
      //localStorage.setItem('login', "true");
      return response;
    } else {
      // User authentication failed
       dispatch({
        type: LoginActionTypes.LOGIN_FAILURE,
        payload: 'Invalid email or password.',
      });
      //localStorage.setItem('login', "false");
      return response;

    }
  } catch (error) {
    console.error('Error:', error);
     dispatch({
      type: LoginActionTypes.LOGIN_FAILURE,
      payload: 'An error occurred while logging in.',
    });
    //localStorage.setItem('login', "false");

  }
};
