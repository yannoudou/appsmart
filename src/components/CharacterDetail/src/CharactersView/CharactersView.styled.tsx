import { colors } from "@helpers/colors";
import { Container } from "react-bootstrap";
import styled from "styled-components";

export const WelComeBox = styled.div`
  padding-top: 9rem;
  padding-bottom: 15rem;
  & > span {
    font-size: 1.8rem;
    font-family: gheavy;
    background: ${colors.second};
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    color: ${colors.black3};
  }

  & > h1 {
    padding-top: 1rem;
    font-size: 4.5rem;
    font-family: gheavy;
    color: ${colors.dark};
    max-width: 800px;
  }

  & > h1 > i {
    font-family: Heavy;
  }

  & > span > i {
    font-family: Heavy;
  }

  & > span > img {
    height: 2rem;
  }
`;

export const ContainCharacterViewDescription = styled.div`
  padding: 1rem;
  border-radius: 8px;
  background-color: ${colors.white};
  min-height: 50vh;
  & > h5 {
    font-family: Book;
    font-size: 1.4rem;
    line-height: 1.9rem;
  }
  & > h1 {
    font-family: Heavy;
    font-size: 2.5rem;
    max-width: 600px;
    margin-bottom: 1.5rem;
  }
  & > p {
    font-family: Bold;
    color: #aaa;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  border-radius: 12px;
`;

export const StyledContainer = styled(Container)`
  width: 100%;
  margin-top: -12rem;
`;

export const ContainIcon = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  & > span {
    position: relative;
    padding-left: 30px;
    color: ${colors.dark};
    cursor: pointer;
  }
  & > span > svg {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    color: ${colors.dark};
    stroke-width: 3;
    font-size: 1.4rem;
  }
`;
export const ContainComicBottom = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  & > h2 {
    font-family: Bold;
    font-size: 1.2rem;
    margin-top: 1.85rem;
    margin-bottom: 0.85rem;
    padding-left: 0.5rem;
  }
  & > span {
    padding: 0.65rem 1.2rem;
    border-radius: 25px;
    background-color: #fff;
    color: #484848;
    margin-left: 0.4rem;
    margin-bottom: 0.4rem;
    /* box-shadow: rgb(0 0 0 / 10%) 0px 4px 12px; */
    display: inline-block;
    border: 2px solid #eee;
    font-size: 1rem;
  }
`;
