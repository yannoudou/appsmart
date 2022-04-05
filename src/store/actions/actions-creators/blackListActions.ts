import { ActionType } from "../types";
import { DispatchType } from "../action-types";

export const clearAllCachedBackEndRequest = (url: string) => {
  return (dispatch: DispatchType) => {
    dispatch({
      type: ActionType.CLEAR_ALL_CACHE_BACK_END_REQUEST,
      payload: { url },
    });
  };
};

export const cacheBackendRequest = (a: {
  url: string;
  data: any;
  result: any;
}) => {
  return (dispatch: DispatchType) => {
    dispatch({
      type: ActionType.CACHE_BACK_END_REQUEST,
      payload: {
        url: a.url,
        data: a.data,
        result: a.result,
      },
    });
  };
};
