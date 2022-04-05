import blacklistReducer from "../../src/store/reducers/blacklistReducer";
import { INITIAL_STATE } from "../../src/store/initState";

const blackListInitState = INITIAL_STATE["blacklist"];

const payload = { data: "any", result: "result", url: "url" };

describe("blacklistReducer", () => {
  it("should return te initial state ", () => {
    expect(blacklistReducer(undefined, {})).toBe(blackListInitState);
  });

  it("should handle CACHE_BACK_END_REQUEST", () => {
    let api = blacklistReducer(undefined, {
      payload,
      type: "CACHE_BACK_END_REQUEST",
    });
    expect(Object.keys(api.requests.request).length).toBe(1);
    expect(
      api.requests.request[`${payload.url}${JSON.stringify(payload.data)}`]
        .result
    ).toEqual(payload.result);
    expect(
      typeof api.requests.request[
        `${payload.url}${JSON.stringify(payload.data)}`
      ].timeStamp
    ).toBe("number");
  });

  it("should handle CLEAR_ALL_CACHE_BACK_END_REQUEST", () => {
    // add  data
    let state = blacklistReducer(undefined, {
      payload,
      type: "CACHE_BACK_END_REQUEST",
    });
    //   and check if delete
    let api = blacklistReducer(state, {
      payload,
      type: "CLEAR_ALL_CACHE_BACK_END_REQUEST",
    });
    expect(Object.keys(api.requests.request).length).toBe(0);
  });

  it("should handle DISCONNECT_AND_INITIALIZE_ALL_REDUCER", () => {
    // add  data
    let state = blacklistReducer(undefined, {
      payload,
      type: "CACHE_BACK_END_REQUEST",
    });
    //   and check if delete
    let api = blacklistReducer(state, {
      type: "DISCONNECT_AND_INITIALIZE_ALL_REDUCER",
    });
    expect(Object.keys(api.requests.request).length).toBe(0);
    expect(Object.keys(api.errorMessage).length).toEqual(0);
  });

  describe("should do if there is an error", () => {
    it("should catch an error", () => {
      expect(blacklistReducer(undefined, undefined)).toBe(blackListInitState);
    });

    it("should return the previous state", () => {
      expect(blacklistReducer(undefined, undefined)).toBe(blackListInitState);
    });
  });
});
