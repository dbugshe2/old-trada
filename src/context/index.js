import { useContext } from 'react';
import AuthProvider, { AuthContext} from './auth/AuthContext'
import CommissionProvider,{ CommissionContext } from './commission/CommissionContext';
import { captureException } from 'sentry-expo';

const useContextFactory = (name, context) => {
  return () => {
    const ctx = useContext(context)
    if (ctx === undefined) {
      captureException(new Error(` use${name}Context must be used within a ${name}ContextProvider.`))
    } else {
      return ctx
    }

  }
}
export const useAuthContext = useContextFactory('AuthContext', AuthContext)
export const useCommissionContext = useContextFactory('CommissionContext', CommissionContext)
export {
  AuthProvider,
  AuthContext,
  CommissionContext,
  CommissionProvider,
}