import { StyledCol, StyledRow } from "@components/Common/StyledComponent";
import { colors } from "@helpers/colors";
import { Container } from "react-bootstrap";
import ContentLoader from "react-content-loader";
import styled from "styled-components";

const CharactersViewLoader = () => {
  return (
    <StyledContainer fluid="xxl">
      <StyledRow>
        <StyledCol xl={5} lg={5} md={5} sm={12}>
          <LeftLoaderBox>
            <ContentLoader />
          </LeftLoaderBox>
        </StyledCol>
        <StyledCol xl={7} lg={7} md={7} sm={12}>
          <LeftLoaderBox>
            <RightLoaderBox width="40%" marginBottom={".4rem"} height="2rem" />
            <RightLoaderBox width="80%" marginBottom={"2.2rem"} height="2rem" />
            <RightLoaderBox width="60%" marginBottom={".4rem"} height="15rem" />
          </LeftLoaderBox>
        </StyledCol>
      </StyledRow>
    </StyledContainer>
  );
};

export const LeftLoaderBox = styled.div`
  background-color: ${colors.white};
  padding: 2rem;
  min-height: 60vh;
  border-radius: 12px;
`;

export const RightLoaderBox = styled.div<{
  height: string;
  width: string;
  marginBottom: string;
}>`
  height: ${(p) => p.height};
  width: ${(p) => p.width};
  margin-bottom: ${(p) => p.marginBottom};
  background-color: ${"#f5f5f5"};
`;

export const StyledContainer = styled(Container)`
  margin-top: -8rem;
`;

export default CharactersViewLoader;
