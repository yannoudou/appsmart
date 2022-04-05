import { colors } from "@helpers/colors";
import Image from "next/image";
import styled from "styled-components";





export const ContainNavBarElement = styled.div`
  text-align: right;
  padding-top: 1.938rem;
  padding-bottom: 1.938rem;
  & > span {
    padding: 0.8rem 1.2rem;
    cursor: pointer;
    font-family: Bold;
    color: ${colors.dark};
    font-size: 1.05rem;
  }
  & > span:hover {
    background-color: #fff;
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
  }
  & > span:hover {
    color: ${colors.second};
  }
  & > a {
    background: ${colors.dark};
    border: 0;
    padding: 0.8rem 1.7rem;
    font-size: 1.05rem;
    border-radius: 33px;
    margin-left: 1.4rem;
  }
`;


export const StyledSection = styled.section`
  /* border-bottom: 1px solid #eee; */
`;


export const ContainLogo = styled.div`
 
 padding-top: 1.938rem;
    padding-bottom: 1.938rem;
  display: flex;
  align-items: center;
  z-index: 3;
  cursor: pointer;
  transition: 150ms all; 
 

  & > span {
    position: relative;
    padding-left: 22px;
    font-family: gheavy;
    /* font-weight: 800; */
    font-size: 1.75rem;
    line-height: 23px;
    padding-top: 11px;
    color: #000;
    transition: 300ms all;
  }
  & > span > i {
    padding-left: 5px;
    font-style: normal;
    font-family: gbold;
    font-size: 20px;
    transition: 300ms all;
  }

  &:hover {
    margin-left: 8px;
    & > span > i {
      padding-top: 7px;
      /* padding-left:10px; */
    }
    & > span {
      padding-left: 10px;
    }
    @media (max-width: 600px) {
      & > span {
        padding-left: 7px;
      }
    }
  }
`;


export const StyledImg = styled(Image)`
  height: 29px;
  @media (max-width: 600px) {
    height: 18px;
  }
`;