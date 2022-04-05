import { emptyAllReducer } from "../../src/store/actions/actions-creators/authActions";
import { ActionType } from "../../src/store/actions/types";

describe("authActions", () => {
  it("should dispatch the actions", () => {
    const dispatch = jest.fn();
    emptyAllReducer()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: ActionType.DISCONNECT_AND_INITIALIZE_ALL_REDUCER,
    });
  });
});
