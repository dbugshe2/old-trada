import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  OTP_SUCCESS,
  OTP_FAIL,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAIL,
  USER_DETAILS,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL
} from "../types";

import { AsyncStorage } from "react-native";

export default (prevState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...prevState,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
      AsyncStorage.clear();
      return {
        ...prevState,
        token: null,
        isAuthenticated: false,
        user: null,
        error: action.payload
      };
    case CLEAR_ERRORS:
      return {
        ...prevState,
        errors: null
      };

    default:
      return prevState;
  }
};
