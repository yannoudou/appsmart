import { bindActionCreators } from "redux";
import * as actionCreators from "../../store/actions/actions-creators";
import { useDispatch } from "react-redux";

// hooks for redux - actions // -> less repetitifs tasks
export function useAction() {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
}
