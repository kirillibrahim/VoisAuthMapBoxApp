/**
 * * *********************************************************
 * Login Types
 * *********************************************************
 */
export enum LoginActionTypes {
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAILURE = 'LOGIN_FAILURE',
  }
  
  export interface LoginState {
    isAuthenticated: boolean;
    error: string;
  }
  
  interface LoginSuccessAction {
    type: LoginActionTypes.LOGIN_SUCCESS;
  }
  
  interface LoginFailureAction {
    type: LoginActionTypes.LOGIN_FAILURE;
    payload: string;
  }
  
  export type LoginAction = LoginSuccessAction | LoginFailureAction;
  
  /**
 * * *********************************************************
 * End of Login Types
 * *********************************************************
 */

  /**
 * * *********************************************************
 * Registration Types
 * *********************************************************
 */
  export enum RegistrationActionTypes {
    REG_SUCCESS = 'REG_SUCCESS',
    REG_FAILURE = 'REG_FAILURE',
  }
  
  interface RegistrationSuccessAction {
    type: RegistrationActionTypes.REG_SUCCESS;
    payload: {register: boolean, message:string};
  }
  
  interface RegistrationFailureAction {
    type: RegistrationActionTypes.REG_FAILURE;
    payload: {register: boolean, message:string};
  }

  export type RegistrationAction = RegistrationSuccessAction | RegistrationFailureAction;
/**
 * * *********************************************************
 * End of Registration Types
 * *********************************************************
 */
 
 /**
 * * *********************************************************
 * Users Types
 * *********************************************************
 */

  // src/store/types.ts
export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface UsersState {
  users: User[];
  error: string;
}

export enum UsersActionTypes {
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE',
}

export interface FetchUsersSuccessAction {
  type: UsersActionTypes.FETCH_USERS_SUCCESS;
  payload: User[];
}

export interface FetchUsersFailureAction {
  type: UsersActionTypes.FETCH_USERS_FAILURE;
  payload: string;
}

export type UserAction = FetchUsersSuccessAction | FetchUsersFailureAction;
 
 /**
 * * *********************************************************
 * End of Users Types
 * *********************************************************
 */

  
 /**
 * * *********************************************************
 * Polygon Types
 * *********************************************************
 */

export interface Area {
  longitude: string;
  latitude: string
}

export interface Polygon {
  title: string;
  area: Array<Area>;
}

export enum PolygonsActionTypes {
  FETCH_POLYGONS_REQUEST = 'FETCH_POLYGONS_REQUEST',
  FETCH_POLYGONS_SUCCESS = 'FETCH_POLYGONS_SUCCESS',
  FETCH_POLYGONS_FAILURE = 'FETCH_POLYGONS_FAILURE'
}


interface FetchPolygonsRequestAction {
  type: PolygonsActionTypes.FETCH_POLYGONS_REQUEST;
}

interface FetchPolygonsSuccessAction {
  type: PolygonsActionTypes.FETCH_POLYGONS_SUCCESS;
  polygons: Polygon[]; // Define your Polygon type
}

interface FetchPolygonsFailureAction {
  type: PolygonsActionTypes.FETCH_POLYGONS_FAILURE;
  error: string;
}

export type PolygonAction =
  | FetchPolygonsRequestAction
  | FetchPolygonsSuccessAction
  | FetchPolygonsFailureAction;