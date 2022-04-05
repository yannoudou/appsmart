import { getAllCharactersResponse } from "@backend/types/response/characters";
import Pagination from "@components/Common/Pagination/Pagination";
import { StyledCol, StyledRow } from "@components/Common/StyledComponent";
import {
  generateApiKeyParameter,
  serverEndPoints,
} from "@helpers/serverEndPoints";
import useFetch from "@helpers/useFetch";
import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import {
  ContainCharacterList,
  ContainNotice,
  ContainPagination,
} from "./CharactersList.styled";
import CharactersItem, {
  CharactersItemLoader,
} from "./CharactersItem/CharactersItem";
const maxCharacterPerPage = 15;

function CharactersList() {
  const [characters, setCharacter] = useState<
    getAllCharactersResponse["data"]["results"]
  >([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(maxCharacterPerPage);
  // hooks for request
  const {
    load: searchCharacterList,
    error,
    success,
  } = useFetch<"getAllCharacters">({
    url: serverEndPoints.getAllCharacters + generateApiKeyParameter() + "&",
    onSuccess: ({ result }) => {
      setCharacter(result?.data?.results ?? []);
      setTotalPages(result.data?.total ?? maxCharacterPerPage);
    },
    // no need of frontend cache on this request since the timestamp is different on every request
    shouldBeCached: false,
  });

  useEffect(() => {
    searchCharacterList("GET", {
      limit: maxCharacterPerPage,
      offset: (currentPage - 1) * maxCharacterPerPage,
    });
  }, [currentPage]);

  // onPageChange update the state and handle the scroll
  function onPageChange(newCurrentPage: number) {
    setCurrentPage(newCurrentPage);
    // use to scroll back top, after the navigation
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // an error occurred or the request was successful but without characters informations
  if (error || (success && characters.length === 0)) {
    const isAnError = error ? true : false;
    return (
      <Wrapper>
        <ContainNotice error={isAnError}>
          <span>
            {isAnError
              ? "An error has occurred"
              : "There are no characters available"}
          </span>
        </ContainNotice>
      </Wrapper>
    );
  }

  // req succeed with characters information
  if (success) {
    return (
      <Wrapper>
        <>
          <StyledRow>
            {characters.map((item, index) => {
              return (
                <StyledCol key={index} xl={4} lg={4} md={4} sm={6} xs={12}>
                  <CharactersItem data={item} />
                </StyledCol>
              );
            })}
          </StyledRow>
          <ContainPagination>
            <Pagination
              pageLimit={maxCharacterPerPage}
              totalRecords={totalPages}
              currentPage={currentPage}
              numberOfPageNeighbours={3}
              onPageChange={(value) => onPageChange(value.currentPage)}
            />
          </ContainPagination>
        </>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <StyledRow>
        {Array(6)
          .fill("")
          .map((_, i) => i + 1)
          .map((item, index) => {
            return (
              <StyledCol
                key={index}
                margin={"2rem"}
                xl={4}
                lg={4}
                md={4}
                sm={6}
                xs={12}
              >
                <CharactersItemLoader />
              </StyledCol>
            );
          })}
      </StyledRow>
    </Wrapper>
  );
}

// wrapper help not to repeat the same Tags mutliple time
const Wrapper = ({ children }: { children: React.ReactChild }) => {
  return (
    <Container fluid="xxl">
      <ContainCharacterList>{children}</ContainCharacterList>
    </Container>
  );
};

export default CharactersList;
