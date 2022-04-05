import { StyledCol, StyledRow } from "@components/Common/StyledComponent";
import { Button, Container } from "react-bootstrap";
import {
  ContainLogo,
  ContainNavBarElement,
  StyledImg,
  StyledSection,
} from "./NavBar.styled";

function NavBar() {
  return (
    <StyledSection id="navbar">
      <Container fluid="xxl">
        <StyledRow>
          <StyledCol xl="12" lg="12" md="12">
            <ContainLogo>
              <StyledImg height={29} width={49} src="/img/logo-bl.svg" />
              <span>
                Yannick<i>NTCH</i>.
              </span>
            </ContainLogo>
          </StyledCol>

          {/* <StyledCol xl='6' lg='6' md='6' >
                        <ContainNavBarElement>
                            <Button href='mailto:yan_noudou@yahoo.fr' >Let us get in touch</Button>
                        </ContainNavBarElement>
                    </StyledCol> */}
        </StyledRow>
      </Container>
    </StyledSection>
  );
}

export default NavBar;
