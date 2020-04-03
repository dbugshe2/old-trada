import React, { createContext, useReducer, useMemo, useState, useContext } from "react";
import {
  setUserToken,
  getUserToken,
  removeUserToken,
  setUser,
  getUser
} from "../../utils/AsyncStorage";
import { captureException } from "sentry-expo";
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
  VERIFY_AUTH_SUCCESS,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_SUCCESS,
  SET_RESET_PIN_OTP,
  CLEAR_MESSAGE,
  SHOW_MESSAGE,
  SUCCESS,
  FAILURE,
  UNAUHTORIZED_CODE,
  NETWORK_ERROR,
  SERVER_ERROR,
  SET_TOKEN
} from "../types";
import { COLORS } from "../../utils/theme";
import { Snack, Text } from "../../components";

// User

/*
 * const user = {
 *   "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlN2Y2NTFiYTZkMDI5MDA2ODViZDVmNyIsInJvbGUiOiJhZ2VudCIsImlhdCI6MTU4NTQ5MTc1NiwiZXhwIjoxNTg1NDk1MzU2fQ.e99gx40smOzcQSjMTnzvFF_7HNGrFGPUgsXeNEOmv-w",
 *   "data": Object {
 *     "_id": "5e7f651ba6d02900685bd5f7",
 *     "active": true,
 *     "address": "No 31, 441 crescent, gwarinpa Abuja",
 *     "agentId": "TRADA9050484101",
 *     "commissionWallet": "5e7f651ba6d02900685bd5f9",
 *     "dateOfBirth": "12-OCT-99",
 *     "district": "Lugbe",
 *     "education": "Secondary education",
 *     "email": "paul.david@gmail.com",
 *     "firstName": "Paul",
 *     "gender": "Male",
 *     "isReseller": false,
 *     "lastName": "David",
 *     "lga": "Estako",
 *     "lock": false,
 *     "meta": Object {
 *       "createdAt": "2020-03-28T14:54:19.355Z",
 *       "updatedAt": "2020-03-28T14:54:19.355Z",
 *     },
 *     "phone": "+2349050484101",
 *     "resellerApproved": false,
 *     "role": "agent",
 *     "state": "Abuja",
 *     "verified": true,
 *     "wallet": "5e7f651ba6d02900685bd5f8",
 *   },
 *   "status": "success",
 *   "statusCode": 200,
 * }
 *
 */

export const AuthContext = createContext();

const baseUrl = "https://thrive-commerce-api.herokuapp.com/thr/v1/users";



const AuthProvider = props => {
  const [loading, setLoading] = useState(true);

  const initialState = {
    token: null,
    isAuthenticated: null,
    user: null,
    phone: null,
    userDetails: null,
    resetPinOtp: null,
    message: null,
    showMessage: null
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
          user: action.payload.data,
          message: "Login successfull",
          showMessage: true
        };
      case LOGIN_FAIL:
        return {
          ...state,
          message: "Login Unsuccessful",
          shoMessage: true
        };
      case VERIFY_AUTH_SUCCESS:
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
          userDetails: null,
          phone: null,
          profileImage: null,
          resetPinOtp: null,
          message: action.payload,
          showMessage: true
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
          userDetails: action.payload.data,
          phone: action.payload.data.phone,
          message: "Welcome back " + action.payload.data.firstName,
          showMessage: true,
          isAuthenticated: true
        };
      case SET_TOKEN:
        return {
          ...state,
          token: action.payload
        };
      case FORGOT_PASSWORD_SUCCESS:
        return {
          ...state,
          phone: action.payload
        };
      case FORGOT_PASSWORD_SUCCESS:
      case SET_RESET_PIN_OTP:
        return {
          ...state,
          resetPinOtp: action.payload
        };
      case PASSWORD_RESET_SUCCESS:
      case PASSWORD_RESET_FAIL:
      case CLEAR_MESSAGE:
        return {
          ...state,
          message: null,
          showMessage: false
        };
      case SHOW_MESSAGE:
        return {
          ...state,
          message: action.payload,
          showMessage: true
        };
      case NETWORK_ERROR:
        return {
          ...state,
          message: "Failed, It seems we're experiencing network problems",
          showMessage: true
        };
      case SERVER_ERROR:
        return {
          ...state,
          message: action.payload.message,
          showMessage: true
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
      if (json === "success") {
        dispatch({
          type: VERIFY_OTP_SUCCESS
        });
        return json;
      }
      dispatch({
        type: VERIFY_OTP_FAIL,
        payload: error.message
      });
      return json;
    } catch (error) {
      captureException(error);
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
  const fetchUserDetails = async token => {
    // return userDetails response or null
    console.log("Fetching User Details..");
    try {
      const data = await (
        await fetch(`${baseUrl}/find`, {
          method: "GET",
          headers: {
            access_token: "Bearer " + token,
            "Content-Type": "application/json"
          }
        })
      ).json();
      if (data.status === SUCCESS) {
        // user authorized
        return data;
      } else if (
        data.status === FAILURE &&
        data.statusCode === UNAUHTORIZED_CODE
      ) {
        // session expired
        return null;
      }
    } catch (error) {
      // network error
      captureException(error);
    }
  };

  const login = async formData => {
    setLoading(true);
    try {
      const data = await (
        await fetch(`${baseUrl}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        })
      ).json();

      if (data.status === SUCCESS) {
        // login Successfull
        dispatch({
          type: LOGIN_SUCCESS,
          payload: data
        });
        const fetchUser = await fetchUserDetails(data.access_token);
        if (fetchUser !== null && fetchUser.status === SUCCESS) {
          // user details successfull
          dispatch({
            type: USER_DETAILS,
            payload: fetchUser
          });
          setLoading(false);
          const saveToken = await setUserToken(data.access_token);
        } else if (fetchUser !== null && fetchUser.status === FAILURE) {
          // user details unsuccessfull
          //show error message
          dispatch({
            type: LOGIN_FAIL,
            payload: fetchUser.message //error message
          });
          setLoading(false);
        }
      } else {
        // login failed
        dispatch({
          type: LOGIN_FAIL,
          payload: data.message // error message
        });
        setLoading(false);
      }
      setLoading(false);
    } catch (error) {
      // network error
      captureException(error);
      dispatch({
        type: NETWORK_ERROR,
        payload: "Network Error.."
      });
      setLoading(false);
    }
  };

  console.log("auth", state); // ? LOG HERE------->
  console.log("loading>> ", loading);
  // const isAuthorized = (res) => res.status
  const verifyLogin = async () => {
    // VERIFY LOGIN STATE
    setLoading(true);
    try {
      const userToken = await getUserToken();
      if (userToken !== null) {
        //token exists in storage
        const userData = await fetchUserDetails(userToken);
        if (userData !== null) {
          // userData request successful
          if (userData.status === SUCCESS) {
            // user still authorized
            dispatch({ type: USER_DETAILS, payload: userData });
            dispatch({ type: SET_TOKEN, payload: userToken });
            setLoading(false);
          } else if (
            userData.status === FAILURE &&
            userData.statusCode === UNAUHTORIZED_CODE
          ) {
            // user unauhtorized
            logout("Session Expired, Log in to continue");
            setLoading(false);
          }
        } else { // userData request NOT successfull
          // server error
          dispatch({
            type: SERVER_ERROR,
            payload: "Unable to fetch user data"
          });
          setLoading(false);
        }
      } else {
        // token doesn't exist in storage
        logout("Your Session Expired, please log in to continue");
      }
    } catch (error) {
      captureException(error);
      setLoading(false);
    }
  };

  //  /pin/forgot
  const requestResetOtp = async formData => {
    const config = {
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    };
    try {
      const res = await fetch(`${baseUrl}/pin/forgot`, config);
      const json = await res.json();
      if (json.status === "success") {
        dispatch({
          type: FORGOT_PASSWORD_SUCCESS,
          payload: formData.phone
        });
        return json;
      }
      dispatch({
        type: FORGOT_PASSWORD_FAIL,
        payload: json.message
      });
      return json;
    } catch (error) {
      captureException(error);
    }
  };

  const setResetPinOtp = formData => {
    dispatch({
      type: SET_RESET_PIN_OTP,
      payload: formData.resetPinOtp
    });
  };
  // /pin/reset
  const resetPin = async formData => {
    const config = {
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        resetPinOtp: resetPinOtp,
        newPin: formData.newPin
      })
    };
    try {
      const res = await fetch(`${baseUrl}/pin/reset`, config);
      const json = await res.json();
      if (json.status === "success") {
        dispatch({
          type: PASSWORD_RESET_SUCCESS,
          payload: json.status
        });
        return json;
      }
      dispatch({
        type: PASSWORD_RESET_FAIL,
        payload: json.message
      });
      return json;
    } catch (error) {
      captureException(error);
    }
  };
  const logout = (message = "Have a nice day, see you soon") => {
    setLoading(true);
    removeUserToken().then(() => {
      dispatch({ type: LOGOUT, payload: message });
      setLoading(false);
    }).catch(err => captureException(err))
  };

  const values = useMemo(() => {
    return {
      isAuthenticated: state.isAuthenticated,
      user: state.user,
      userDetails: state.userDetails,
      phone: state.phone,
      resetPinOtp: state.resetPinOtp,
      message: state.message,
      showMessage: state.showMessage,
      loading: loading,
      requestOtp,
      verifyOtp,
      setUserDetails,
      signup,
      login,
      verifyLogin,
      requestResetOtp,
      setResetPinOtp,
      resetPin,
      logout
    };
  }, [state, loading]);

  return (
    <AuthContext.Provider value={values}>
      {props.children}
      <Snack
        visible={state.showMessage}
        onDismiss={() => dispatch({ type: CLEAR_MESSAGE })}
      >
        <Text color={COLORS.gray} body mtmedium>
          {state.message}
        </Text>
      </Snack>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
