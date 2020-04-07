import React, { createContext, useReducer, useMemo, useState, useContext } from "react";
import { setUserToken, getUserToken } from "../../utils/AsyncStorage";
import { captureException } from "sentry-expo";
import {
  GET_STATES_SUCCESS,
  GET_STATES_FAIL,
  GET_STATES_AND_LGAS_FAIL,
  GET_STATES_AND_LGAS_SUCCESS,
  GET_LGAS_FAIL,
  GET_LGAS_SUCCESS,
  GET_BANKS_SUCCESS,
  GET_BANKS_FAIL,
  RESOLVE_ACCOUNT_SUCCESS,
  RESOLVE_ACCOUNT_FAIL
} from "../types";
import { apiGet } from '../../utils/fetcher';
import useAuthContext from '../auth/AuthContext'
export const VariationContext = createContext();

const baseUrl = "https://thrive-commerce-api.herokuapp.com/thr/v1/variation";

const VariationProvider = ({children}) => {

  const [loading, setLoading] = useState(true);
  const auth = useAuthContext()

  const {validateToken, logout} = auth
 
  const initialState = {
    states_and_lgas: null,
    states: null,
    lgas: null,
    banks: null,
    message: null,
    errors: null
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case GET_STATES_AND_LGAS_SUCCESS:
        return {
          ...state,
          states_and_lgas: action.payload
        };
      case GET_STATES_AND_LGAS_FAIL:
        return {
          ...state,
          message: action.payload
        };
      case GET_STATES_SUCCESS:
        return {
          ...state,
          states: action.payload
        };
      case GET_STATES_FAIL:
        return {
          ...state,
          message: action.payload
        };
      case GET_LGAS_SUCCESS:
        return {
          ...state,
          lgas: action.payload
        };
      case GET_LGAS_FAIL:
        return {
          ...state,
          message: action.payload
        };
      case GET_BANKS_SUCCESS:
        return {
          ...state,
          banks: action.payload.data
        }
      case GET_BANKS_FAIL:
      case RESOLVE_ACCOUNT_SUCCESS:
      case RESOLVE_ACCOUNT_FAIL:
      default: 
        return state
    }
  }, initialState || {});
  // /states_and_lga

  const getStatesDetails = async () => {
    const config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      setLoading(true);
      const res = await fetch(`${baseUrl}/states_and_lga`, config);
      let json = await res.json();
      setLoading(false);
      if (json.status === "success") {
        dispatch({
          type: GET_STATES_AND_LGAS_SUCCESS,
          payload: json.data
        });
        return json.data;
      }
      dispatch({
        type: GET_STATES_AND_LGAS_FAIL,
        payload: "Network Error"
      });
      return ;
    } catch (error) {
      captureException(error);
      return error;
    }
  };
  const getStates = () => {
    setLoading(true);
    const statesList = states_and_lgas.map(curStateObject => {
      return curStateObject.name
    });
    dispatch({
      type: GET_STATES_SUCCESS,
      payload: statesList
    });
    setLoading(false);
    return;
  };
  const getLGAS = alias => { };
  
  const getBanks = async () => {
    try {
      const token = await validateToken()
  
      if (token) {
        const data = await apiGet('/variation/banks', {}, token, true)
        .unauthorized(err => console.log("unauthorized", err))
        .notFound(err => console.log("not found", err))
        .timeout(err => console.log("timeout", err))
        .internalError(err => console.log("server Error", err))
        .fetchError(err => console.log("Netwrok error", err))
        .json();
        if (data) {
          dispatch ({
            type: GET_BANKS_SUCCESS,
            payload: data
          })
        } else {
          dispatch ({
            type: GET_BANKS_FAIL,
            payload: data.message
          })
        }

      } else {
        logout("session Expired bitch")
      }
      
    } catch (error) {
      captureException(error)
    }
  }


  const values = useMemo(() => {
    return {
      message: state.message,
      states_and_lgas: state.states_and_lgas,
      states: state.states,
      lgas: state.lgas,
      bank: state.bank,
      errors: state.errors,
      loading,
      getStatesDetails,
      getStates,
      getLGAS,
      getBanks
    };
  }, [state]);

  return (
    <VariationContext.Provider value={values}>
      {children}
    </VariationContext.Provider>
  );
};

export const useVariationContext = () => useContext(VariationContext)

export default VariationProvider;
