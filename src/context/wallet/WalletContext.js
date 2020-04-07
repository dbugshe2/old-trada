import React, {
  createContext,
  useReducer,
  useMemo,
  useContext
} from "react";
import { captureException } from "sentry-expo";
import { useAuthContext } from "../auth/AuthContext";

import {
  WALLET_SUCCESS,
  WALLET_FAIL,
  WALLET_HISTORY_SUCCESS,
  WALLET_HISTORY_FAIL,
  WALLET_WITHDRAW_SUCCESS,
  WALLET_WITHDRAW_FAIL,
  CLEAR_MESSAGE,
} from "../types";
import { COLORS } from "../../utils/theme";
import { Snackbar } from 'react-native-paper';
import { apiGet, apiPost } from "../../utils";
import { Text } from "../../components";

// Wallet

/*
 *
 *
 */

export const WalletContext = createContext();


const WalletProvider = ({children}) => {
  const auth = useAuthContext();
  const { logout } = auth;

  const initialState = {
    wallet: null,
    walletBalance: null,
    walletHistory: null,
    showMessage: null,
    message: null
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case WALLET_SUCCESS:
      case WALLET_FAIL:
      case WALLET_HISTORY_SUCCESS:
      case WALLET_HISTORY_FAIL:
      case WALLET_WITHDRAW_SUCCESS:
      case WALLET_WITHDRAW_FAIL:
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


  const getWallet = async () => {
    
  }

  const values = useMemo(() => {
    return {
      wallet: state.wallet,
      walletBalance: state.walletBalance,
      walletHistory:state.walletHistory,
      message: state.message,
      showMessage: state.showMessage,
    };
  }, [state]);

  return (
    <WalletContext.Provider value={values}>
      {children}
      <Snackbar
        visible={state.showMessage}
        onDismiss={() => dispatch({ type: CLEAR_MESSAGE })}
        duration={3000}
        style={{
          backgroundColor: COLORS.odd
        }}
      >
        <Text color={COLORS.gray} body mtmedium>
          {state.message}
        </Text>
      </Snackbar>
    </WalletContext.Provider>
  );
};
export const useWalletContext = () => useContext(WalletContext)
export default WalletProvider;
