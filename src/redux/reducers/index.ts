import { combineReducers } from "redux";

import loginReducer from "./loginReducer";
import registrationReducer from "./registrationReducer";
import userReducer from "./usersReducer";
import polygonsReducer from "./polygonsReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  registration: registrationReducer,
  users: userReducer,
  polygons: polygonsReducer
});

export default rootReducer;
