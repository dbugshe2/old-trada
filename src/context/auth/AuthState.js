import React, {createContext, useReducer, useMemo} from 'react'
import axios from 'axios'

import authReducer from './authReducer'
const AuthContext = createContext()
const AuthState = props => {
  const initialState = {
    isAuthenticated: null,
    user: null,
    error: null,
    userId: null,
    userDetails: null,
    phone: null,
    message: null
  }

  const [state, dispatch] = useReducer(authReducer, initialState || {})

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
    }
  })


  return (
    <AuthContext.Provider value={values}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
