import { colors } from "@helpers/colors";
import styled from "styled-components";

export const ContainCharacterDetails = styled.div``;

export const ContainNotice = styled.div<{ error?: boolean }>`
  margin-top: 5rem;
  margin-bottom: 5rem;
  text-align: center;
  & > span {
    font-size: 2.5rem;
    font-family: gheavy;
    background: ${(p) => {
      if (p.error) return colors.red;
      return colors.second;
    }};
    padding: 1rem 2rem;
    color: ${(p) => {
      if (p.error) return colors.white;
      return colors.black3;
    }};
  }
`;

export const TakeHomeBackground = styled.div`
  background-image: url(/img/cover.svg);
  background-position: 50% 100%;
  padding-top: 0rem;
  padding-bottom: 13rem;
`;
