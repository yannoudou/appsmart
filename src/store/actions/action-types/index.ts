import { Dispatch } from "redux";

import { Action as blacklistType } from "./blackList";
import { AuthActionType } from "./auth";

export type Action = AuthActionType | blacklistType;

type DispatchFuncType = (a: any) => (dispatch: Dispatch<Action>) => any;
export type DispatchType = Dispatch<Action> | DispatchFuncType;
