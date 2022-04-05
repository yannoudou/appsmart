import { $CombinedState, combineReducers } from "redux";
import authReducer from "./authReducer";
import blackListReducer from "./blacklistReducer";

const reducers = combineReducers({
  auth: authReducer,
  blacklist: blackListReducer,
});

export default reducers;

export type StateType = ReturnType<typeof reducers>;

type CombinedStateType = typeof $CombinedState;
export type StateKeyType = keyof Omit<StateType, CombinedStateType>;
