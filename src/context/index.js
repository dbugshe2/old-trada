import AuthProvider, { AuthContext, useAuthContext} from './auth/AuthContext'
import CommissionProvider,{ CommissionContext, useCommissionContext } from './commission/CommissionContext';
import WalletProvider, { useWalletContext } from './wallet/WalletContext'
import VariationProvider, { VariationContext, useVariationContext } from './variation/VariationContext';

export {
  AuthProvider,
  AuthContext,
  useAuthContext,
  CommissionContext,
  CommissionProvider,
  useCommissionContext,
  WalletProvider,
  useWalletContext,
  useVariationContext,
  VariationProvider,
  VariationContext
}