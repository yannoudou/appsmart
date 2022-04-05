import { StyledRow, StyledCol } from "@components/Common/StyledComponent";
import { Container } from "react-bootstrap";
import { WelComeBox } from "./WelcomeAndSearchBar.styles";

function WelcomeAndSearchBar() {
  return (
    <section id="welcome">
      <Container fluid="xxl">
        <StyledRow>
          <StyledCol xl="12" lg="12" md="12">
            <WelComeBox>
              <span>Hallo.</span>
              <h1>Character overview from Marvel.</h1>
            </WelComeBox>
          </StyledCol>
        </StyledRow>
      </Container>
    </section>
  );
}

export default WelcomeAndSearchBar;
