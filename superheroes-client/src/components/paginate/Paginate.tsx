import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PaginateContainer } from "./Paginate.styled";
import ReactPaginate from "react-paginate";
import { pageSlice } from "../../store/reducers/PageSlice";
import getHeight from "../../functions/getElementHeight";
import useAppDispatch from "../../hooks/useAppDispatch";

interface PaginateType {
  current: number;
  pageCount: number;
}

const Paginate: React.FC<PaginateType> = ({ current, pageCount }) => {
  const [selectedPage, setSelectedPage] = useState<number>(current);
  const [height, setHeight] = useState("");

  const dispatch = useAppDispatch();
  const { changeActivePage, setLastPage } = pageSlice.actions;

  const navigate = useNavigate();

  useEffect(() => {
    const setMainHeight = () => {
      const main: HTMLElement | null = document.getElementById("main");
      if (main) {
        const mainHeight = getHeight(main);
        setHeight(`${mainHeight}px`);
      }
    };
    setMainHeight();
  }, []);

  useEffect(() => {
    dispatch(setLastPage(pageCount));
  }, [dispatch, setLastPage, pageCount]);

  useEffect(() => {
    dispatch(changeActivePage(selectedPage));
    navigate(`/superheroes/${selectedPage}`);
  }, [selectedPage, changeActivePage, navigate, dispatch]);

  const handlePageClick = (event: { selected: number }) => {
    setSelectedPage(event.selected + 1);
  };

  return (
    <PaginateContainer containerHeight={height}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        initialPage={current - 1}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        className="paginate_list"
        pageClassName="paginate_item"
        pageLinkClassName="paginate_link"
        activeLinkClassName="active"
      />
    </PaginateContainer>
  );
};

export default Paginate;
