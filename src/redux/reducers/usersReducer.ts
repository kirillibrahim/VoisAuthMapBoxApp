import { UsersActionTypes, UserAction, UsersState } from '../types'; // Define your types

const initialState: UsersState = {
  users: [],
  error: '',
};

const userReducer = (state = initialState, action: UserAction): UsersState => {
  switch (action.type) {
    case UsersActionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        error: '',
      };
    case UsersActionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
