import { ActionType } from "../actions/types";
import { Action } from "../actions/action-types";
import { INITIAL_STATE } from "../initState";
const INITIAL_STATE_AUTH = INITIAL_STATE["auth"];

function authReducer(
  state = INITIAL_STATE_AUTH,
  action: Action
): typeof INITIAL_STATE_AUTH {
  switch (action.type) {
    case ActionType.DISCONNECT_AND_INITIALIZE_ALL_REDUCER:
      return INITIAL_STATE_AUTH;

    default:
      return state;
  }
}

export default authReducer;
