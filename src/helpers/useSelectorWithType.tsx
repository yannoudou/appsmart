// @ts-nocheck
import { useSelector } from "react-redux";
import { StateType } from "src/store/reducers";

/**
 * use to add useSelector some type by default
 * The Idea is to prevent repetitiv action
 * @param selector
 */
export function useSelectorWithType<TSelected = unknown>(
  selector: (state: StateType) => TSelected
): TSelected {
  return useSelector<StateType>(selector);
}
