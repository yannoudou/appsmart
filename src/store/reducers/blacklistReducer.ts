import { ActionType } from "../actions/types";
import { Action } from "../actions/action-types";
import { INITIAL_STATE } from "../initState";
const INITIAL_STATE_BLACKLIST = INITIAL_STATE["blacklist"];
import dayjs from "dayjs";

const blacklistReducer = function (
  state = INITIAL_STATE_BLACKLIST,
  action: Action
): typeof INITIAL_STATE_BLACKLIST {
  try {
    switch (action.type) {
      case ActionType.CACHE_BACK_END_REQUEST:
        let { url, data, result } = action.payload;
        let _url = url + JSON.stringify(data);
        return {
          ...state,
          requests: {
            ...state.requests,
            request: {
              ...state.requests.request,
              [_url]: {
                ...state.requests.request[_url],
                result,
                timeStamp: dayjs(new Date()).unix(),
              },
            },
          },
        };

      case ActionType.CLEAR_ALL_CACHE_BACK_END_REQUEST:
        let newObj: typeof state.requests.request = {};
        Object.keys(state.requests.request).map((key) => {
          if (!key.includes(action.payload.url)) {
            newObj[key] = state.requests.request[key];
          }
        });
        return {
          ...state,
          requests: {
            ...state.requests,
            request: newObj,
          },
        };

      case ActionType.DISCONNECT_AND_INITIALIZE_ALL_REDUCER:
        return INITIAL_STATE_BLACKLIST;

      default:
        return state;
    }
  } catch (error) {
    return state;
  }
};

export default blacklistReducer;
