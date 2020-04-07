import React, {
  createContext,
  useReducer,
  useMemo,
  useState,
  useContext
} from "react";
import { getUserToken } from "../../utils/AsyncStorage";
import { captureException } from "sentry-expo";
import {
  COMMISSION_WALLET_SUCCESS,
  COMMISSION_WALLET_FAIL,
  COMMISSION_HISTORY_SUCCESS,
  COMMISSION_HISTORY_FAIL,
  COMMISSION_FULL_HISTORY_SUCCESS,
  COMMISSION_FULL_HISTORY_FAIL,
  FIND_COMMISSION_SUCCESS,
  FIND_COMMISSION_FAIL,
  COMMISSION_LEADERBOARD_SUCCESS,
  COMMISSION_LEADERBOARD_FAIL,
  COMMISSION_TRANSFER_SUCCESS,
  COMMISSION_TRANSFER_FAIL,
  CLEAR_ERRORS,
  CLEAR_MESSAGE,
  SHOW_MESSAGE,
  SUCCESS,
  FAILURE,
  UNAUHTORIZED_CODE
} from "../types";
import { COLORS } from "../../utils/theme";
import { apiGet, apiPost } from "../../utils";
import { useAuthContext } from "../auth/AuthContext";
import { Snackbar } from "react-native-paper";
import Text from "../../components/primary/Text";
import CurrencyFormatter from '../../utils/currency';

/*
 * const commissionWallet = {
 *    "data": {
 *        "meta": {
 *            "createdAt": "2020-03-28T14:54:19.616Z",
 *            "updatedAt": "2020-03-28T14:54:19.616Z"
 *        },
 *        "balance": 0,
 *        "overallEarnings": 0,
 *        "_id": "5e7f651ba6d02900685bd5f9",
 *        "user": "5e7f651ba6d02900685bd5f7",
 *        "wallet": "5e7f651ba6d02900685bd5f8",
 *        "agentId": "TRADA9050484101"
 *    },
 *    "status": "success",
 *    "statusCode": 200
 * }
 */
export const CommissionContext = createContext();

const baseUrl = "https://thrive-commerce-api.herokuapp.com/thr/v1/commissions";

const CommissionProvider = props => {
  const [loading, setLoading] = useState(true);
  const auth = useAuthContext();
  const { validateToken } = auth;

  const initialState = {
    commissionWallet: null,
    commissionWalletId: null,
    userId: null,
    commissionBalance: null,
    history: [],
    fullHistory: [],
    historyCount: null,
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
          history: action.payload.data
        };
      case COMMISSION_HISTORY_FAIL:
        return {
          ...state,
          message: action.payload,
          showMessage: true
        };
      case COMMISSION_FULL_HISTORY_SUCCESS:
        return {
          ...state,
          fullHistory: [...state.fullHistory, ...action.payload.data],
          historyCount: action.payload.totalDocumentCount
        };
      case COMMISSION_FULL_HISTORY_FAIL:
        return {
          ...state,
          message: action.payload,
          showMessage: true
        };
      case FIND_COMMISSION_SUCCESS:
      case FIND_COMMISSION_FAIL:
      case COMMISSION_LEADERBOARD_SUCCESS:
      case COMMISSION_LEADERBOARD_FAIL:
      case COMMISSION_TRANSFER_SUCCESS:
        return {
          ...state,
          message: `${CurrencyFormatter(action.payload)} transfer to wallet SUCCESSFULL`,
          showMessage: true
        }
      case COMMISSION_TRANSFER_FAIL:
        return {
          ...state,
          message: "transfer to wallet FAILED"+ action.payload.message,
          showMessage: true
        }
      case CLEAR_MESSAGE:
        return {
          ...state,
          message: null,
          showMessage: false
        };
      default:
        return state;
    }
  }, initialState || {});

  // console.log("commission ", state);

  const getCommissionWallet = async () => {
    try {
      const token = await validateToken();
      if (token) {
        const data = await apiGet("/commissions/wallet", {}, token, true)
          .unauthorized(err => console.log("unauthorized", err))
          .notFound(err => console.log("not found", err))
          .timeout(err => console.log("timeout", err))
          .internalError(err => console.log("server Error", err))
          .fetchError(err => console.log("Netwrok error", err))
          .json();
        if (data) {
          dispatch({
            type: COMMISSION_WALLET_SUCCESS,
            payload: data
          });
        }
      }
    } catch (error) {
      dispatch({
        type: COMMISSION_WALLET_FAIL,
        payload: error
      });
      captureException(error);
    }
  };

  const getRecentCommissionHistory = async limit => {
    try {
      const token = await validateToken();
      if (token) {
        const data = await apiGet(
          "/commissions/history",
          { skip: 0, limit: limit },
          token,
          true
        )
          .unauthorized(err => console.log("unauthorized", err))
          .notFound(err => console.log("not found", err))
          .timeout(err => console.log("timeout", err))
          .internalError(err => console.log("server Error", err))
          .fetchError(err => console.log("Netwrok error", err))
          .json();
        console.log(data);
        if (data) {
          dispatch({
            type: COMMISSION_HISTORY_SUCCESS,
            payload: data
          });
        }
      } else {
        dispatch({
          type: COMMISSION_HISTORY_FAIL,
          payload: "Sorry, Session Expired log in again to continue"
        });
      }
    } catch (error) {
      captureException(error);
    }
  };
  const getCommissionHistory = async (limit, skip) => {
    try {
      const token = await validateToken();
      if (token) {
        const res = await apiGet(
          "/commissions/history",
          { skip: skip, limit: limit },
          token,
          true
        )
          .unauthorized(err => console.log("unauthorized", err))
          .notFound(err => console.log("not found", err))
          .timeout(err => console.log("timeout", err))
          .internalError(err => console.log("server Error", err))
          .fetchError(err => console.log("Netwrok error", err))
          .json();
        console.log(res);
        if (res) {
          dispatch({
            type: COMMISSION_FULL_HISTORY_SUCCESS,
            payload: res
          });
        } else {
          console.log(res);
        }
      } else {
        dispatch({
          type: COMMISSION_FULL_HISTORY_FAIL,
          payload: "Sorry, Session Expired log in again to continue"
        });
      }
    } catch (error) {
      captureException(error);
    }
  };
  console.log("commission__>>", state);

  const cashOutCommission = async formData => {
    try {
      const token = await validateToken();
      if (token) {
        const data = await apiPost(
          "/commissions/transfer",
          formData,
          token,
          true
        )
          .unauthorized(err => console.log("unauthorized", err))
          .notFound(err => console.log("not found", err))
          .timeout(err => console.log("timeout", err))
          .internalError(err => console.log("server Error", err))
          .fetchError(err => console.log("Netwrok error", err))
          .json();
        if (data.status === SUCCESS) {
          console.log("cash out sucessfull", data);
          dispatch({
            type: COMMISSION_TRANSFER_SUCCESS,
            payload: formData.amount
          });
          return true
        } else {
          dispatch({
            type: COMMISSION_TRANSFER_FAIL,
            payload: data
          });
          return false
        }
      }
    } catch (error) {
      captureException(error);
      return null
    }
  };

  const getCommissionsLeaderBoard = async (skip, limit) => {
    try {
      const token = await validateToken();
      if (token) {
        const data = await apiGet(
          "/commissions/leaderboard",
          { skip: skip, limit: limit },
          token,
          true
        )
          .unauthorized(err => console.log("unauthorized", err))
          .notFound(err => console.log("not found", err))
          .timeout(err => console.log("timeout", err))
          .internalError(err => console.log("server Error", err))
          .fetchError(err => console.log("Netwrok error", err))
          .json();
        console.log(data);
        if (data) {
          dispatch({
            type: COMMISSION_LEADERBOARD_SUCCESS,
            payload: data
          });
        }
      } else {
        dispatch({
          type: COMMISSION_LEADERBOARD_FAIL,
          payload: "Sorry, Session Expired log in again to continue"
        });
      }
    } catch (error) {
      captureException(error);
    }
  };

  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  const values = useMemo(() => {
    return {
      commissionWallet: state.commissionWallet,
      commissionWalletId: state.commissionWalletId,
      userId: state.userId,
      commissionBalance: state.commissionBalance,
      history: state.history,
      fullHistory: state.fullHistory,
      historyCount: state.historyCount,
      leaderboard: state.leaderboard,
      error: state.error,
      message: state.message,
      showMessage: state.showMessage,
      getCommissionWallet,
      getCommissionHistory,
      getRecentCommissionHistory,
      getCommissionsLeaderBoard,
      cashOutCommission,
      clearErrors
    };
  }, [state, loading]);

  return (
    <CommissionContext.Provider value={values}>
      {props.children}
      <Snackbar
        visible={state.showMessage}
        onDismiss={() => dispatch({ type: CLEAR_MESSAGE })}
        duration={3000}
        style={{
          backgroundColor: COLORS.odd
        }}
      >
        <Text color={COLORS.gray} body mtmedium>
          {values.message}
        </Text>
      </Snackbar>
    </CommissionContext.Provider>
  );
};

export const useCommissionContext = () => useContext(CommissionContext);

export default CommissionProvider;
