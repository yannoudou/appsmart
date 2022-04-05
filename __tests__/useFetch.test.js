import axios from "axios";
import useFetch, {
  makeAxiosRequest,
  transformObjectToQueryParameterString,
} from "../src/helpers/useFetch";
import { renderHook, act } from "@testing-library/react-hooks";
import { INITIAL_STATE } from "../src/store/initState";

jest.mock("axios");

jest.mock("react-redux", () => {
  const ActualReactRedux = jest.requireActual("react-redux");
  return {
    ...ActualReactRedux,
    useSelector: jest.fn().mockImplementation(() => {
      return INITIAL_STATE["blacklist"];
    }),
    useDispatch: jest.fn().mockImplementationOnce(() => {}),
  };
});

const data = {
  userName: "tester",
  height: 180,
};

describe("useFetch", () => {
  describe("makeAxiosRequest", () => {
    it("successfully fetch data from an API", async () => {
      // get method
      axios.post.mockImplementationOnce(() => Promise.resolve(data)); // axios.post.mockResolvedValue(response)
      await expect(makeAxiosRequest("url", "POST", data)).resolves.toEqual(
        data
      );

      // get method
      axios.get.mockImplementationOnce(() => Promise.resolve(data));
      await expect(makeAxiosRequest("url", "GET", data)).resolves.toEqual(data);
    });

    it("fetches erroneously data from an API", async () => {
      const errorMessage = "An error";

      // get method
      axios.get.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage))
      );
      await expect(makeAxiosRequest("url", "GET", data)).rejects.toThrow(
        errorMessage
      );

      // post method
      axios.post.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage))
      );
      await expect(makeAxiosRequest("url", "POST", data)).rejects.toThrow(
        errorMessage
      );
    });
  });

  describe("transformObjectToQueryParameterString", () => {
    it("should return an string if an object is pass as params", () => {
      expect(
        transformObjectToQueryParameterString({ id: 10, val: 20 })
      ).toEqual("id=10&val=20");
    });
    it("should return an string if a string is pass as params", () => {
      expect(transformObjectToQueryParameterString("string")).toEqual("string");
    });
  });

  describe("useFetch Hook", () => {
    const url = "url";

    it("should be initialize with default value", () => {
      const onSuccess = jest.fn();
      const onError = jest.fn();
      const {
        result: { current },
      } = renderHook(() => useFetch({ url, onSuccess, onError }));

      expect(current.loading).toBeFalsy();
      expect(current.error).toBeFalsy();
      expect(current.success).toBeFalsy();
    });

    it("startLoading ", () => {
      const onSuccess = jest.fn();
      const onError = jest.fn();

      const { result } = renderHook(() =>
        useFetch({ url, onSuccess, onError })
      );

      expect(result.current.loading).toBeFalsy();
      expect(result.current.error).toBeFalsy();
      expect(result.current.success).toBeFalsy();

      act(() => {
        result.current.startLoading();
      });

      expect(result.current.loading).toBeTruthy();
      expect(result.current.error).toBeFalsy();
      expect(result.current.success).toBeFalsy();
      expect(onError).toHaveBeenCalledTimes(0);
      expect(onSuccess).toHaveBeenCalledTimes(0);
    });

    it("successFullLoading ", () => {
      const onSuccess = jest.fn();
      const onError = jest.fn();
      const { result } = renderHook(() =>
        useFetch({ url, onSuccess, onError })
      );

      expect(result.current.loading).toBeFalsy();
      expect(result.current.error).toBeFalsy();
      expect(result.current.success).toBeFalsy();

      act(() => {
        result.current.successFullLoading();
      });

      expect(result.current.loading).toBeFalsy();
      expect(result.current.error).toBeFalsy();
      expect(result.current.success).toBeTruthy();
      expect(onError).toHaveBeenCalledTimes(0);
      expect(onSuccess).toHaveBeenCalledTimes(0);
    });

    it("errorLoading ", () => {
      const onSuccess = jest.fn();
      const onError = jest.fn();
      const { result } = renderHook(() =>
        useFetch({ url, onSuccess, onError })
      );

      expect(result.current.loading).toBeFalsy();
      expect(result.current.error).toBeFalsy();
      expect(result.current.success).toBeFalsy();

      act(() => {
        result.current.errorLoading();
      });

      expect(result.current.loading).toBeFalsy();
      expect(result.current.error).toBeTruthy();
      expect(result.current.success).toBeFalsy();
      expect(onError).toHaveBeenCalledTimes(0);
      expect(onSuccess).toHaveBeenCalledTimes(0);
    });

    describe("testing the load feature", () => {
      const errorMessage = "somme error";

      it("load successfully", async () => {
        const onSuccess = jest.fn();
        const onError = jest.fn();
        axios.post.mockImplementationOnce(() => Promise.resolve({ data }));
        const { result } = renderHook(() =>
          useFetch({ url, onSuccess, onError })
        );

        expect(result.current.loading).toBeFalsy();
        expect(result.current.error).toBeFalsy();
        expect(result.current.success).toBeFalsy();

        await act(() => {
          // currentPage = 8, nextPage should be -> 9
          result.current.load("POST", "");
        });

        expect(result.current.loading).toBeFalsy();
        expect(result.current.error).toBeFalsy();
        expect(result.current.success).toBeTruthy();

        expect(onSuccess).toHaveBeenCalledTimes(1);
        expect(onError).toHaveBeenCalledTimes(0);
        expect(onSuccess.mock.calls[0][0].requestParameter).toEqual("");
        expect(onSuccess.mock.calls[0][0].result).toEqual(data);
      });

      it("error during loading ", async () => {
        const onSuccess = jest.fn();
        const onError = jest.fn();
        axios.get.mockImplementationOnce(() =>
          Promise.reject(new Error(errorMessage))
        );
        const { result } = renderHook(() =>
          useFetch({ url, onSuccess, onError })
        );

        expect(result.current.loading).toBeFalsy();
        expect(result.current.error).toBeFalsy();
        expect(result.current.success).toBeFalsy();

        await act(() => {
          // currentPage = 8, nextPage should be -> 9
          result.current.load("GET", "");
        });

        expect(result.current.loading).toBeFalsy();
        expect(result.current.error).toBeTruthy();
        expect(result.current.success).toBeFalsy();

        expect(onSuccess).toHaveBeenCalledTimes(0);
        expect(onError).toHaveBeenCalledTimes(1);
        expect(onError.mock.calls[0][0].result).toEqual(
          new Error(errorMessage)
        );
        expect(onError.mock.calls[0][0].requestParameter).toEqual("");
      });
    });

    // describe('cacheAndValidData', () => {
    //     it("get call", () => {

    //     });
    //  })
  });
});

/**
 * Permanent fix
 * @testing-library/react-hooks still hast react 17 has dependencing,
 * which cause that error.
 * for testing purpose it's totally fine
 */
const errorLog = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (
      /Warning: ReactDOM.render is no longer supported in React 18./.test(
        args[0]
      )
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = errorLog;
});
