import { MouseEvent, useEffect, useState } from "react";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { paginationProps, usePagination } from "./Pagination.hooks";
import {
    StyledLi,
    StyledA,
    StyledUL,
    StyledAActive,
} from "./Pagination.styled";

export type eventType = MouseEvent<HTMLElement>


/**
 * @param props PaginationPropsType
 * @returns JSX.Element | null
 */
function Pagination(props: paginationProps): JSX.Element | null {
    const {
        currentPage,
        goToPage,
        goToNextPage,
        goToPreviousPage,
        pages,
        showLeftArrow,
        showRightArrow,
    } = usePagination(props);


    function handleGoToNextPage(e: eventType) {
        e.preventDefault();
        if (!showRightArrow) return false;
        goToNextPage()
    }

    function handleGoToPreviousPage(e: eventType) {
        e.preventDefault();
        if (!showLeftArrow) return false;
        goToPreviousPage()
    }

    function handleGoToPage(e: eventType, page: number) {
        e.preventDefault();
        goToPage(page)
    }

    return (
        <div>
            <StyledUL>
                <StyledLi opacity={(showLeftArrow) ? 1 : 0} >
                    <StyledA
                        href="#"
                        aria-label="Previous"
                        onClick={(e) => handleGoToPreviousPage(e)}
                    >
                        <FiChevronsLeft style={{ fontSize: "1.3em" }} />
                    </StyledA>
                </StyledLi>

                {pages.map((page, index) => {
                    const Styler = currentPage === page ? StyledAActive : StyledA;
                    return (
                        <StyledLi key={index}>
                            <Styler href="#" onClick={(e) => handleGoToPage(e, page)}>
                                {page}
                            </Styler>
                        </StyledLi>
                    );
                })}

                <StyledLi opacity={(showRightArrow) ? 1 : 0} >
                    <StyledA
                        href="#"
                        aria-label="Next"
                        onClick={(e) => handleGoToNextPage(e)}
                    >
                        <FiChevronsRight style={{ fontSize: "1.3em" }} />
                    </StyledA>
                </StyledLi>
            </StyledUL>
        </div>
    );
}

export default Pagination;
