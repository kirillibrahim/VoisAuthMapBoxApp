import { Reducer } from 'redux';
import { RegistrationActionTypes,  RegistrationAction } from '../types';



const registrationReducer: Reducer<any, RegistrationAction> = (state = {register: false, message:""}, action) => {
  switch (action.type) {
    case RegistrationActionTypes.REG_SUCCESS:
      return action.payload;
    case RegistrationActionTypes.REG_FAILURE:
      return action.payload;
    default:
      return state;
  }
};

export default registrationReducer;
