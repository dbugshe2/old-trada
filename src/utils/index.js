import rgba from "./rgba";
import theme from "./theme";
import { getMargins, getPaddings, spacing } from './helpers';
import { getUserToken, setUserToken, removeUserToken, setUser, getUser, removeUser } from "./AsyncStorage";
import CurrencyFormatter, { NumberFormatter} from './currency';
import { saveToClipboard } from './clipboard';
import { decode, getExpiry, isValid} from './token'
import { apiGet, apiPost, apiPut, apiDel } from './fetcher';

export {
  getMargins,
  getPaddings,
  spacing,
  rgba,
  theme,
  getUserToken,
  setUserToken,
  removeUserToken,
  setUser,
  getUser,
  removeUser,
  CurrencyFormatter,
  NumberFormatter,
  saveToClipboard,
  decode,
  getExpiry,
  isValid,
  apiGet,
  apiPost,
  apiPut,
  apiDel
};
