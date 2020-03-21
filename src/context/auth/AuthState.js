import React, { createContext, useReducer, useMemo } from "react";
import axios from "axios";
import { setStorageData, getStorageData } from "../../utils/AsyncStorage";
import authReducer from "./authReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from "../types";

export const AuthContext = createContext();

const AuthState = props => {
  const initialState = {
    isAuthenticated: null,
    user: null,
    error: null,
    userId: null,
    userDetails: null,
    phone: null,
    message: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState || {});

  const signup = async formData => {
    try {
      await setStorageData("randomtoken");
      dispatch({
        type: REGISTER_SUCCESS,
        payload: "randomtokenagain"
      });
      return "responsehere";
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: "Error Error"
      });
      return "error";
    }
  };

  const login = async formData => {
    try {
      await setStorageData("thistoken");
      dispatch({
        type: LOGIN_SUCCESS,
        payload: "anothertokenhere"
      });
      return "yeahyeah";
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: "Error error"
      });
      return "errr";
    }
  };

  const logout = () => dispatch({ type: LOGOUT });

  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  const values = useMemo(() => {
    return {
      isAuthenticated: state.isAuthenticated,
      loading: state.loading,
      user: state.user,
      error: state.error,
      userId: state.userId,
      userDetail: state.userDetail,
      phone: state.phone,
      message: state.message,
      signup,
      login,
      logout,
      clearErrors
    };
  }, [state]);

  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
};

export default AuthState;
