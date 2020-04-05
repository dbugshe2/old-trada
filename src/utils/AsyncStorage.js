import { AsyncStorage } from "react-native";
import * as SecureStore from 'expo-secure-store'

import { TOKEN_KEY, USER_KEY } from '../config/keys'



export const getUserToken = async () => {
  try {
      let token = await SecureStore.getItemAsync(TOKEN_KEY);

      if (token !== null) return token;
      else return null;

  } catch (error) {
      throw new Error(error)
  }
};

export const setUserToken = async (data) => {
  try {
        await SecureStore.setItemAsync(TOKEN_KEY, data);
  } catch (error) {
      throw new Error(error)
  }
};

export const removeUserToken = async () => {
  try {
        return await SecureStore.deleteItemAsync(TOKEN_KEY);
  } catch (error) {
      throw new Error(error)
  }
};

export const getUser = async () => {
  try {
      let user = await AsyncStorage.getItem(USER_KEY);

      if (user !== null) return user;
      else return null;
  } catch (error) {
      throw new Error(error)
  }
};

export const setUser = async (data) => {
  try {
        await AsyncStorage.setItem(USER_KEY, data);
  } catch (error) {
      throw new Error(error)
  }
};
export const removeUser = async () => {
  try {
        return await AsyncStorage.removeItem(USER_KEY);
  } catch (error) {
      throw new Error(error)
  }
};