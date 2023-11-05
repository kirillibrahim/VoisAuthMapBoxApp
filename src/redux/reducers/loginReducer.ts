import { Reducer } from 'redux';
import { LoginActionTypes, LoginState, LoginAction } from '../types';

const initialState: LoginState = {
  isAuthenticated: false,
  error: '',
};

const loginReducer: Reducer<LoginState, LoginAction> = (state = initialState, action) => {
  switch (action.type) {
    case LoginActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        error: '',
      };
    case LoginActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
