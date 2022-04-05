import { useEffect, useRef, useState } from "react";


export interface paginationProps {
    totalRecords: number;
    pageLimit: number;
    /** number of neighbours, they will be multiple time 2 */
    numberOfPageNeighbours?: number;
    currentPage?: number;
    onPageChange: (a: paginationTypeType) => void;
}

export type paginationTypeType = {
    currentPage: number,
    totalPages: number,
    pageLimit: number,
    totalRecords: number
};


const defaultValueCurrentPage = 1;
const defaultValuePageLimit = 30;
const defaultValuePageNeighbourst = 0;
const defaultValueTotalRecords = 30;





export const range = (from: number, to: number, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) { // inclusive range
        range.push(i);
        i += step;
    }

    return range;
};



export const calculatePages = (totalPages: number, currentPage: number = 1, numberOfPageNeighbours: number) => {

    /**
     * ######## currentPage ########
     * leftSide Neighbours +  1  + RightSide Neighbours = 2*Neighbours + 1;
     */
    const totalNumbers = numberOfPageNeighbours * 2 + 1;

    // +2  because - at both extremety we the first,the last page. so we can navigate fastly to them
    const totalBlocks = totalNumbers + 2;

    let showLeftArrow = false;
    let showRightArrow = false;

    const canWeShowAllPages = totalPages <= totalBlocks
    if (canWeShowAllPages)
        return {
            pages: range(1, totalPages),
            showLeftArrow, showRightArrow
        }

    let pages = [];

    const leftBound = currentPage - numberOfPageNeighbours;
    const rightBound = currentPage + numberOfPageNeighbours;
    const beforeLastPage = totalPages - 1;

    const startPage = leftBound > 2 ? leftBound : 2;
    const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

    pages = range(startPage, endPage);

    const pagesCount = pages.length;
    const singleSpillOffset = totalNumbers - pagesCount - 1;

    const leftSpill = startPage > 2;
    const rightSpill = endPage < beforeLastPage;


    if (leftSpill && !rightSpill) {
        const extraPages = range(startPage - singleSpillOffset, startPage - 1);
        showLeftArrow = true;
        pages = [...extraPages, ...pages];
    } else if (!leftSpill && rightSpill) {
        showRightArrow = true;
        const extraPages = range(endPage + 1, endPage + singleSpillOffset);
        pages = [...pages, ...extraPages];
    } else if (leftSpill && rightSpill) {
        showLeftArrow = true;
        showRightArrow = true;
    }
    return {
        pages: [1, ...pages, totalPages],
        showLeftArrow, showRightArrow
    };
};


export const usePagination = (props: paginationProps) => {
    const pageLimit = useRef(props.pageLimit ?? defaultValuePageLimit);
    const totalRecords = useRef(props.totalRecords ?? defaultValueTotalRecords);
    const numberOfPageNeighbours = useRef(props.numberOfPageNeighbours ?? defaultValuePageNeighbourst);
    const totalPages = useRef(Math.ceil(totalRecords.current / pageLimit.current));

    const [currentPage, setCurrentPage] = useState(props.currentPage ?? defaultValueCurrentPage)

    useEffect(() => {
        const paginationInfos: paginationTypeType = {
            currentPage,
            pageLimit: pageLimit.current,
            totalPages: totalPages.current,
            totalRecords: totalRecords.current,
        }
        props.onPageChange(paginationInfos)
    }, [currentPage])


    const goToPage = (page: number) => {
        setCurrentPage(page)
    }

    const goToNextPage = () => {
        setCurrentPage((page) => page + 1)
    }

    const goToPreviousPage = () => {
        setCurrentPage((page) => page - 1)
    }

    const { pages, showLeftArrow, showRightArrow } = calculatePages(totalPages.current, currentPage, numberOfPageNeighbours.current)

    return {
        currentPage,
        pages,
        goToPage,
        goToNextPage,
        goToPreviousPage,
        showLeftArrow,
        showRightArrow,
    }
}