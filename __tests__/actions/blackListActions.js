import {
  clearAllCachedBackEndRequest,
  cacheBackendRequest,
} from "../../src/store/actions/actions-creators/blackListActions";
import { ActionType } from "../../src/store/actions/types";

describe("clearAllCachedBackEndRequest", () => {
  it("should dispatch the actions", () => {
    const dispatch = jest.fn();
    clearAllCachedBackEndRequest("url")(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: ActionType.CLEAR_ALL_CACHE_BACK_END_REQUEST,
      payload: { url: "url" },
    });
  });
});

describe("cacheBackendRequest", () => {
  it("should dispatch the actions", () => {
    const params = { url: "string", data: "any", result: "any" };
    const dispatch = jest.fn();
    cacheBackendRequest(params)(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: ActionType.CACHE_BACK_END_REQUEST,
      payload: {
        url: params.url,
        data: params.data,
        result: params.result,
      },
    });
  });
});
