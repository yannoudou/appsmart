import { useState } from "react";
import axios from "axios";
import {
  differentMethodType,
  possibleEndPointsType,
  Props,
  ReqTypeArg,
} from "./useFetch.types";
import { useAction } from "../useAction";
import { useSelectorWithType } from "../useSelectorWithType";
import dayjs from "dayjs";

export interface customAxiosRequestReturnType<B extends possibleEndPointsType> {
  /** loading - the request started, and is loading */
  loading: boolean;

  /** error - an error occured during the request */
  error: boolean;

  /** CALL ME TO START YOUR REQUEST */
  load: (method: differentMethodType, value: ReqTypeArg<B>) => Promise<boolean>;

  /** success - The request was successful */
  success: boolean;

  startLoading: () => void;
  successFullLoading: () => void;
  errorLoading: () => void;

  cacheAndValidData: (url: string, reqData: any, result: any) => void;
  checkIfValidDataExist: (url: string, reqData: any) => boolean;
}

export const transformObjectToQueryParameterString = (value: any) => {
  const res = !value
    ? ""
    : typeof value === "string"
    ? value
    : Object.keys(value)
        .map((key) => key + "=" + value[key])
        .join("&");

  return res;
};

export async function makeAxiosRequest<B extends possibleEndPointsType>(
  url: string,
  method: differentMethodType,
  value: any
) {
  try {
    // axios.defaults.withCredentials = true;
    if (method === "POST") {
      return await axios.post(url, value);
    }

    return await axios.get(
      `${url}${transformObjectToQueryParameterString(value)}`
    );
    //  launch the req
  } catch (error) {
    throw error;
  }
}

export function useFetch<B extends possibleEndPointsType>(
  props: Props<B>
): customAxiosRequestReturnType<B> {
  const { url, onSuccess, onError, shouldBeCached, timeout = 720 } = props;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const requests = useSelectorWithType((state) => state.blacklist.requests);

  // actions hooks
  const { cacheBackendRequest, clearAllCachedBackEndRequest } = useAction();

  const startLoading = () => {
    setSuccess(false);
    setLoading(true);
  };

  const successFullLoading = () => {
    setError(false);
    setLoading(false);
    setSuccess(true);
  };

  const errorLoading = () => {
    setError(true);
    setLoading(false);
  };

  // test needed
  const cacheAndValidData = (url: string, reqData: any, result: any) => {
    shouldBeCached && cacheBackendRequest({ url, data: reqData, result });
  };

  // test needed
  const checkIfValidDataExist = (url: string, reqData: any) => {
    if (!shouldBeCached) return false;
    // get data from store
    const key = url + JSON.stringify(reqData);

    const hasData = requests?.request[key];
    if (hasData) {
      // on va prendre
      const { result, timeStamp } = hasData;
      const nowInUnix = dayjs(new Date()).unix();

      if (timeStamp + timeout > nowInUnix) {
        // valid data
        successFullLoading();
        onSuccess && onSuccess({ result, requestParameter: reqData });
        return true;
      }
      // data are no more valid delete them
      clearAllCachedBackEndRequest(url);
    }
    return false;
  };

  const load = async (method: differentMethodType, value: ReqTypeArg<B>) => {
    try {
      // prevent multiple request at the same time
      if (loading) return false;
      startLoading();

      // check if we have some valid data in the store
      const hasValidData = checkIfValidDataExist(url, value);
      if (hasValidData) return true;

      const res = await makeAxiosRequest<B>(url, method, value);
      const _res = res?.data;

      cacheAndValidData(url, value, _res); // store request data and response on localstorage

      // if an onSuccess Listener has been pass
      onSuccess && onSuccess({ result: _res, requestParameter: value });
      successFullLoading();
      return true;
    } catch (e) {
      console.log("error", e);
      errorLoading();
      // if an OnError Listener has been send
      onError && onError({ requestParameter: value, result: e });
      return false;
    }
  };

  return {
    load,
    loading,
    error,
    success,
    startLoading,
    successFullLoading,
    errorLoading,
    cacheAndValidData,
    checkIfValidDataExist,
  };
}
