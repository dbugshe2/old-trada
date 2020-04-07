import { useContext } from 'react';
import AuthProvider, { AuthContext, useAuthContext, validateToken} from './auth/AuthContext'
import CommissionProvider,{ CommissionContext, useCommissionContext } from './commission/CommissionContext';



export {
  AuthProvider,
  AuthContext,
  useAuthContext,
  CommissionContext,
  CommissionProvider,
  useCommissionContext,
  validateToken
}