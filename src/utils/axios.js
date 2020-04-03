import axios from "axios";
import { getUserToken } from "./AsyncStorage";
import * as Sentry from "sentry-expo";

const baseUrl = "https://thrive-commerce-api.herokuapp.com/thr/v1";

// IIFE for axios config
const setDefaults = async () => {
  // set default Content-Type to json
  axios.defaults.headers.common["Content-Type"] = "application/json";
  // set Authorization token to every request if logged in
  try {
    let data = await getUserToken();
    if (!data) {
      delete axios.defaults.headers.common["access_token"];
    } else {
      axios.defaults.headers.common["access_token"] = ` $Bearer {data}`;
    }
  } catch (error) {
    Sentry.captureException(error);
  }
}
setDefaults()
export async function get(url, config = {}) {
  try {
    return await axios.get(`${baseUrl}/${url}`, config);
  } catch (error) {
    Sentry.captureException(error);
    return error;
  }
}

export async function post(url, formData, config = {}) {
 
  try {
    return await axios.post(`${baseUrl}/${url}`, formData, config);
  } catch (error) {
    Sentry.captureException(error);
    return error;
  }
}

export async function put(url, formData, config = {}) {
 
  try {
    return await axios.get(`${baseUrl}/${url}`, formData, config);
  } catch (error) {
    Sentry.captureException(error);
    return error.response;
  }
}
