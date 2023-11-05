
import axios from 'axios';
import { Dispatch } from 'redux';
import { UsersActionTypes, UserAction } from '../types';

export const fetchUsers = () => (dispatch: Dispatch<UserAction>) => {
  axios.get('http://localhost:3000/api/users')
    .then((response) => {
      // Use response.data to access the actual data
      dispatch({
        type: UsersActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.error('Error fetching user data:', error);
      dispatch({
        type: UsersActionTypes.FETCH_USERS_FAILURE,
        payload: 'Error fetching user data',
      });
    });
};
