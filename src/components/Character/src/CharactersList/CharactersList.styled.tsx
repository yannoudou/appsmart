import { colors } from "@helpers/colors";
import styled from "styled-components";

export const ContainCharacterList = styled.div`
  margin-top: -9rem;
`;

export const ContainPagination = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  text-align: center;
  font-size: 120%;
  & > div {
    text-align: center;
    display: inline-block;
  }
  & > div > ul {
    background-color: transparent;
  }
`;

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
