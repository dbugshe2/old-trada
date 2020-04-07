import React, {
  createContext,
  useReducer,
  useMemo,
  useState,
  useContext
} from "react";
import axios from "axios";
import { getUserToken } from "../../utils/AsyncStorage";
import { captureException } from "sentry-expo";
import {
  useAuthContext
} from "../";
import {
  COMMISSION_WALLET_SUCCESS,
  COMMISSION_WALLET_FAIL,
  COMMISSION_HISTORY_SUCCESS,
  COMMISSION_HISTORY_FAIL,
  FIND_COMMISSION_SUCCESS,
  FIND_COMMISSION_FAIL,
  COMMISSION_LEADERBOARD_SUCCESS,
  COMMISSION_LEADERBOARD_FAIL,
  COMMISSION_TRANSFER_SUCCESS,
  CLEAR_ERRORS,
  CLEAR_MESSAGE,
  SHOW_MESSAGE,
  SUCCESS,
  FAILURE,
  UNAUHTORIZED_CODE
} from "../types";
import { Snack, Text } from "../../components";
import { COLORS } from "../../utils/theme";

// Wallet

/*
 * 
 */

export const WalletContext = createContext();

const baseUrl = "https://thrive-commerce-api.herokuapp.com/thr/v1/wallet";

const CommissionProvider = props => {
  const [loading, setLoading] = useState(true);
  const auth = useAuthContext();
  const {logout } = auth;

  const initialState = {
    commissionWallet: null,
    commissionWalletId: null,
    userId: null,
    commissionBalance: null,
    history: null,
    leaderboard: [],
    error: null,
    showMessage: null,
    showError: null,
    message: null
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case COMMISSION_WALLET_SUCCESS:
        return {
          ...state,
          commissionWallet: action.payload.data,
          commissionWalletId: action.payload.data._id,
          userId: action.payload.data.user,
          commissionBalance: action.payload.data.balance
        };
      case COMMISSION_WALLET_FAIL:
      case COMMISSION_HISTORY_SUCCESS:
        return {
          ...state,
          history: [...state.history, ...action.payload.data]
        }
      case COMMISSION_HISTORY_FAIL:
        return {
          ...state,
          message: action.payload,
          showMessage: true
        }
      case FIND_COMMISSION_SUCCESS:
      case FIND_COMMISSION_FAIL:
      case COMMISSION_LEADERBOARD_SUCCESS:
      case COMMISSION_LEADERBOARD_FAIL:
      case COMMISSION_TRANSFER_SUCCESS:
      case COMMISSION_TRANSFER_FAIL:
      case CLEAR_MESSAGE:
        return {
          ...state,
          message: null,
          showMessage: false
        }
      default:
        return state;
    }
  }, initialState || {});

  // console.log("commission ", state);

  const getCommissionWallet = async () => {
    setLoading(true);
    try {
      const token = await getUserToken()
      const data = await (
        await fetch(`${baseUrl}/wallet`, {
          method: "GET",
          headers: {
            access_token: "Bearer " + token,
            'Content-Type': 'application/json'
          },
          
        })
      ).json();
      console.log(data, 'token', token)
      if (data.status === SUCCESS) {
        // user authorized
        dispatch({
          type: COMMISSION_WALLET_SUCCESS,
          payload: data
        });
        setLoading(false)
      } else if (data.status === FAILURE && statusCode === UNAUHTORIZED_CODE) {
      }
    } catch (error) {
      captureException(error);
      setLoading(false);
    }
  };
  const getRecentCommissionHistory = (limit) => {
    setLoading(true)
      getUserToken().then(token => {
        console.log('token from commission', token)
        fetch(`${baseUrl}/history?skip=0&limit=${limit}`, {
          method: 'GET',
          headers: {
            access_token: "Bearer " + token,
            'Content-Type': 'application/json'
          }
        })
      }).then(res => res.json())
        .then(data => {
          console.log('history fetch', data)
          if (data.status === SUCCESS) {
            dispatch({
              type: COMMISSION_HISTORY_SUCCESS,
              payload: data
            })
            setLoading(false)
          } else if (data.status === FAILURE && data.statusCode === UNAUHTORIZED_CODE) { // user unathorized
            dispatch({
              type: COMMISSION_HISTORY_FAIL,
              payload: "Sorry, Session Expired log in again to continue"
            })
            setLoading(false)
          } else {
            dispatch(({
              type: COMMISSION_HISTORY_FAIL,
              payload: "Operation Failed"
            }))
            setLoading(false)
          }
        
      }).catch(error => {
        captureException(error)
        setLoading(false)
    })
    
  }

  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  const values = useMemo(() => {
    return {
      commissionWallet: state.commissionWallet,
      commissionWalletId: state.commissionWalletId,
      userId: state.userId,
      commissionBalance: state.commissionBalance,
      history: state.history,
      leaderboard: state.leaderboard,
      error: state.error,
      message: state.message,
      showMessage: state.showMessage,
      loading: loading,
      getCommissionWallet,
      getCommissionHistory,
      getRecentCommissionHistory,
      clearErrors
    };
  }, [state, loading]);

  return (
    <WalletContext.Provider value={values}>
      {props.children}
      <Snack
        visible={state.showMessage}
        onDismiss={() => dispatch({ type: CLEAR_MESSAGE })}
      >
        <Text color={COLORS.gray} body mtmedium>
          {state.message}
        </Text>
      </Snack>
    </WalletContext.Provider>
  );
};

export default WalletProvider;
