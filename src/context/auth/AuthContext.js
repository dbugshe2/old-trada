import React, { createContext, useReducer, useMemo, useState } from "react";
import axios from "axios";
// import {get, post, put} from '../../utils'
import { setUserToken, getUserToken } from "../../utils/AsyncStorage";
import { captureException } from "sentry-expo";
import { AsyncStorage } from 'react-native';
  import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  OTP_SUCCESS,
  OTP_FAIL,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAIL,
  USER_DETAILS,
  USER_LOADED,
  AUTH_ERROR,
  VERIFY_AUTH_FAIL,
  VERIFY_AUTH_SUCCESS
} from "../types";

// User

/*
Object {
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlN2Y2NTFiYTZkMDI5MDA2ODViZDVmNyIsInJvbGUiOiJhZ2VudCIsImlhdCI6MTU4NTQ5MTc1NiwiZXhwIjoxNTg1NDk1MzU2fQ.e99gx40smOzcQSjMTnzvFF_7HNGrFGPUgsXeNEOmv-w",
  "data": Object {
    "_id": "5e7f651ba6d02900685bd5f7",
    "active": true,
    "address": "No 31, 441 crescent, gwarinpa Abuja",
    "agentId": "TRADA9050484101",
    "commissionWallet": "5e7f651ba6d02900685bd5f9",
    "dateOfBirth": "12-OCT-99",
    "district": "Lugbe",
    "education": "Secondary education",
    "email": "paul.david@gmail.com",
    "firstName": "Paul",
    "gender": "Male",
    "isReseller": false,
    "lastName": "David",
    "lga": "Estako",
    "lock": false,
    "meta": Object {
      "createdAt": "2020-03-28T14:54:19.355Z",
      "updatedAt": "2020-03-28T14:54:19.355Z",
    },
    "phone": "+2349050484101",
    "resellerApproved": false,
    "role": "agent",
    "state": "Abuja",
    "verified": true,
    "wallet": "5e7f651ba6d02900685bd5f8",
  },
  "status": "success",
  "statusCode": 200,
}

*/ 



export const AuthContext = createContext();

const baseUrl = "https://thrive-commerce-api.herokuapp.com/thr/v1/users";

const AuthProvider = props => {
  const [loading, setLoading] = useState(true);
  
  const initialState = {
    token: null,
    isAuthenticated: null,
    user: null,
    error: null,
    userId: null,
    userDetails: null,
    phone: null,
    message: null
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          user: { ...action.payload.data }
        };
      case REGISTER_FAIL:
      case LOGIN_SUCCESS:
        return {
          ...state,
          token: action.payload.access_token,
          user: { ...action.payload.data },
          isAuthenticated: true
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isAuthenticated: false
        };
      case VERIFY_AUTH_SUCCESS:
        return {
          ...state,
          token: action.payload,
          isAuthenticated: true
        }
      case VERIFY_AUTH_FAIL:
      case AUTH_ERROR:
      case OTP_FAIL:
      case VERIFY_OTP_FAIL:
      case LOGOUT:
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          user: null,
          error: action.payload
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          errors: null
        };
      case OTP_SUCCESS:
        return {
          ...state,
          phone: action.payload
        };
      case VERIFY_OTP_SUCCESS:
      case USER_DETAILS:
        return {
          ...state,
          userDetail: action.payload
        };
      case FORGOT_PASSWORD_SUCCESS:
        return {
          ...state,
          message: action.payload
        };
      default:
        return state;
    }
  }, initialState || {});

  // /phone/otp
  const requestOtp = async formData => {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    };
    try {
      const res = await fetch(`${baseUrl}/phone/otp`, config);
      let json = await res.json();
      dispatch({
        type: OTP_SUCCESS,
        payload: formData.phone
      });
      return json;
    } catch (error) {
      dispatch({
        type: OTP_FAIL,
        payload: error.message
      });
      return error;
    }
  };
  // phone/otp/confirm
  const verifyOtp = async formData => {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    };
    try {
      const res = await fetch(`${baseUrl}/phone/otp/confirm`, config);
      let json = await res.json();
      dispatch({
        type: VERIFY_OTP_SUCCESS
      });
      return json;
    } catch (error) {
      dispatch({
        type: VERIFY_OTP_FAIL,
        payload: error.message
      });
      captureException(error)
      return error;
    }
  };
  const setUserDetails = formData => {
    dispatch({
      type: USER_DETAILS,
      payload: formData
    });
  };

  const signup = async formData => {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    };
    try {
      const res = await fetch(`${baseUrl}/onboarding`, config);
      let json = await res.json();
      if (json.status === "success") {
        await setUserToken(json.access_token);
        dispatch({
          type: REGISTER_SUCCESS
        });
        return json;
      }
      dispatch({
        type: REGISTER_FAIL,
        payload: json.message
      });
      return json;
    } catch (error) {
      captureException(error);
      dispatch({
        type: REGISTER_FAIL,
        payload: error.message
      });
      return error;
    }
  };

  const login = async formData => {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    };
    try {
      // setLoading(true)
      const res = await fetch(`${baseUrl}/login`, config);
      const json = await res.json();
      console.log(json)
      if (json.status === "success") {
        await setUserToken(json.access_token);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: json.access_token
        });
        // setLoading(false)
        return json
      }
      dispatch({
        type: LOGIN_FAIL,
        payload: json
      });
      // setLoading(false)
      return json;
    } catch (error) {
      captureException(error);
      // setLoading(false)
    }
  };
//  console.log(state)
  const verifyLogin = async () => {
    try {
      const res = await getUserToken()
      if (res != null) {
        dispatch({
          type: VERIFY_AUTH_SUCCESS,
          payload: res
        })
        setLoading(false)
      } else {
        dispatch({
          type: VERIFY_AUTH_FAIL,
        })
        setLoading(false)
        
      }
      setLoading(false)
      return res
    } catch (error) {
      captureException(error)
    }
  }

  const logout = async () => {
    await AsyncStorage.clear();
    dispatch({ type: LOGOUT })
  }

  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  const values = useMemo(() => {
    return {
      isAuthenticated: state.isAuthenticated,
      user: state.user,
      error: state.error,
      userId: state.userId,
      userDetail: state.userDetail,
      phone: state.phone,
      message: state.message,
      loading: loading,
      requestOtp,
      verifyOtp,
      setUserDetails,
      signup,
      login,
      verifyLogin,
      logout,
      clearErrors
    };
  }, [state]);

  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
