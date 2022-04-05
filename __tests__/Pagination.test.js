import { renderHook, act } from "@testing-library/react-hooks";
import {
  usePagination,
  range,
  calculatePages,
} from "../src/components/Common/Pagination/Pagination.hooks";

describe("Pagination", () => {
  describe("range", () => {
    it("test the range function", () => {
      expect(range(1, 5).length).toEqual(5);
      expect(range(1, 5, 2).length).toEqual(3);
    });
  });

  describe("calculatePages", () => {
    it("can show all pages at once", () => {
      const api = calculatePages(10, 1, 7);
      expect(api.pages.length).toEqual(10);
      expect(api.showLeftArrow).toBeFalsy();
      expect(api.showRightArrow).toBeFalsy();
    });

    it("should always add the first and last page when it can't show all pages at once", () => {
      const api = calculatePages(20, 1, 0);
      expect(api.pages[0]).toEqual(1);
      expect(api.pages[api.pages.length - 1]).toEqual(20);
    });

    it("when all pages can't be show  at once, it always show an arrow or both", () => {
      // show right arrow
      const api = calculatePages(20, 1, 0);
      expect(api.pages.length).toEqual(2);
      expect(api.showLeftArrow).toBeFalsy();
      expect(api.showRightArrow).toBeTruthy();

      // show left arrow
      const apiSecondCall = calculatePages(20, 18, 3);
      expect(apiSecondCall.pages.length).toEqual(3 * 2 + 2);
      expect(apiSecondCall.showLeftArrow).toBeTruthy();
      expect(apiSecondCall.showRightArrow).toBeFalsy();

      // show both
      const apiThirdCall = calculatePages(20, 10, 3);
      expect(apiThirdCall.pages.length).toEqual(3 * 2 + 3);
      expect(apiThirdCall.showLeftArrow).toBeTruthy();
      expect(apiThirdCall.showRightArrow).toBeTruthy();
    });
  });

  describe("usePagination hooks", () => {
    // describe("Initialization", () => {  });
    it("should be initialize with default value", () => {
      const onPageChange = jest.fn();
      const {
        result: { current },
      } = renderHook(() =>
        usePagination({ totalRecords: 85, pageLimit: 10, onPageChange })
      );

      expect(current.currentPage).toEqual(1);
      expect(current.showLeftArrow).toBeFalsy();
      expect(current.showRightArrow).toBeTruthy();
      expect(current.pages.length).toEqual(2);
      expect(onPageChange).toHaveBeenCalledTimes(1);
      const fakeData = [
        [{ currentPage: 1, pageLimit: 10, totalPages: 9, totalRecords: 85 }],
      ];
      expect(onPageChange.mock.calls.toString()).toEqual(fakeData.toString());
    });

    it("testing the nextPage feature", () => {
      const onPageChange = jest.fn();
      const { result } = renderHook(() =>
        usePagination({
          currentPage: 8,
          totalRecords: 100,
          pageLimit: 10,
          onPageChange,
          numberOfPageNeighbours: 2,
        })
      );

      expect(result.current.currentPage).toEqual(8);
      expect(result.current.showLeftArrow).toBeTruthy();
      expect(result.current.showRightArrow).toBeFalsy();
      expect(result.current.pages.length).toEqual(2 * 2 + 2);
      expect(onPageChange).toHaveBeenCalledTimes(1);

      act(() => {
        // currentPage = 8, nextPage should be -> 9
        result.current.goToNextPage();
      });

      expect(result.current.currentPage).toEqual(9);
      expect(result.current.showLeftArrow).toBeTruthy();
      expect(result.current.showRightArrow).toBeFalsy();
      expect(result.current.pages.length).toEqual(2 * 2 + 2);
      expect(onPageChange).toHaveBeenCalledTimes(2);
      expect(onPageChange.mock.calls[0][0].currentPage).toEqual(8);
      expect(onPageChange.mock.calls[1][0].currentPage).toEqual(9);

      act(() => {
        // currentPage = 9, nextPage should be -> 10  (last page)
        result.current.goToNextPage();
      });

      expect(result.current.currentPage).toEqual(10);
      expect(result.current.showLeftArrow).toBeTruthy();
      expect(result.current.showRightArrow).toBeFalsy();
      expect(result.current.pages.length).toEqual(2 * 2 + 2);
      expect(onPageChange).toHaveBeenCalledTimes(3);
      expect(onPageChange.mock.calls[0][0].currentPage).toEqual(8);
      expect(onPageChange.mock.calls[1][0].currentPage).toEqual(9);
      expect(onPageChange.mock.calls[2][0].currentPage).toEqual(10);
    });

    it("tests the onChange page feature", () => {
      const onPageChange = jest.fn();

      const { result } = renderHook(() =>
        usePagination({
          currentPage: 2,
          nberOfBlockVisible: 2,
          totalPage: 10,
          onPageChange,
        })
      );

      act(() => {
        // currentPage = 2, change Page to -> 4
        result.current.goToPage(4);
      });

      expect(result.current.currentPage).toEqual(4);
      expect(result.current.showLeftArrow).toBeFalsy();
      expect(result.current.showRightArrow).toBeFalsy();
      expect(onPageChange).toHaveBeenCalledTimes(2);
      expect(onPageChange.mock.calls[0][0].currentPage).toEqual(2);
      expect(onPageChange.mock.calls[1][0].currentPage).toEqual(4);

      act(() => {
        result.current.goToPage(2);
      });

      expect(result.current.currentPage).toEqual(2);
      expect(result.current.showLeftArrow).toBeFalsy();
      expect(result.current.showRightArrow).toBeFalsy();
      expect(onPageChange).toHaveBeenCalledTimes(3);
      expect(onPageChange.mock.calls[0][0].currentPage).toEqual(2);
      expect(onPageChange.mock.calls[1][0].currentPage).toEqual(4);
      expect(onPageChange.mock.calls[2][0].currentPage).toEqual(2);
    });

    it("testing the previousPage feature", () => {
      const onPageChange = jest.fn();
      const { result } = renderHook(() =>
        usePagination({
          currentPage: 2,
          nberOfBlockVisible: 3,
          totalPage: 10,
          onPageChange,
        })
      );

      act(() => {
        // currentPage = 2, change Page to -> 1
        result.current.goToPreviousPage();
      });

      expect(result.current.currentPage).toEqual(1);
      expect(result.current.showLeftArrow).toBeFalsy();
      expect(result.current.showRightArrow).toBeFalsy();
      expect(onPageChange).toHaveBeenCalledTimes(2);
      expect(onPageChange.mock.calls[0][0].currentPage).toEqual(2);
      expect(onPageChange.mock.calls[1][0].currentPage).toEqual(1);
    });
  });
});

/**
 * Permanent fix
 * @testing-library/react-hooks still has react 17 has dependencing,
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
