/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { createContext, useReducer, useMemo, useState } from "react";
import { setUserToken, getUserToken } from "../../utils/AsyncStorage";
import { captureException } from "sentry-expo";
import {
  GET_STATES_SUCCESS,
  GET_STATES_FAIL,
  GET_STATES_AND_LGAS_FAIL,
  GET_STATES_AND_LGAS_SUCCESS,
  GET_LGAS_FAIL,
  GET_LGAS_SUCCESS
} from "../types";
import { apiGet } from '../../utils/fetcher';

export const VariationContext = createContext();

const baseUrl = "https://thrive-commerce-api.herokuapp.com/thr/v1/variation";

const VariationProvider = props => {

  const [loading, setLoading] = useState(true);
  const initialState = {
    states_and_lgas: null,
    states: null,
    lgas: null,
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

  const getBanks = async () => {
    // const banks = await apiGet('/variation/banks')
  }

  const values = useMemo(() => {
    return {
      message: state.message,
      states_and_lgas: state.states_and_lgas,
      states: state.states,
      lgas: state.lgas,
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
      {props.children}
    </VariationContext.Provider>
  );
};

export default VariationProvider;
