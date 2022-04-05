import { ActionType } from "../types";
import { DispatchType } from "../action-types";

export const emptyAllReducer = () => {
  return (dispatch: DispatchType) => {
    dispatch({
      type: ActionType.DISCONNECT_AND_INITIALIZE_ALL_REDUCER,
    });
  };
};
