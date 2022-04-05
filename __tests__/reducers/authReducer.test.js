import authReducer from "../../src/store/reducers/authReducer";
import { INITIAL_STATE } from "../../src/store/initState";

describe("authReducer", () => {
  it("should return the initial state ", () => {
    expect(authReducer(undefined, {})).toBe(INITIAL_STATE["auth"]);
  });

  it("should handle DISCONNECT_AND_INITIALIZE_ALL_REDUCER", () => {
    expect(
      authReducer(undefined, { type: "DISCONNECT_AND_INITIALIZE_ALL_REDUCER" })
    ).toBe(INITIAL_STATE["auth"]);
  });

  it("should handle return the old state value , if any error", () => {
    expect(authReducer(undefined, {})).toBe(INITIAL_STATE["auth"]);
  });
});
