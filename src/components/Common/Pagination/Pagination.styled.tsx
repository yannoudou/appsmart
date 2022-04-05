import styled from "styled-components";

export const StyledLi = styled.li<{ opacity?: number }>`
  opacity: ${(p) => p.opacity ?? 1};
`;

export const StyledA = styled.a`
  position: relative;
  display: block;
  padding: 0.5em 0.95em;
  margin-left: -1px;
  line-height: 1.25;
  color: #333;
  font-family: Bold;
  font-size: 0.85em;
  /* background-color: #fff; */
  /* border: 1px solid #dee2e6; */
`;

export const StyledUL = styled.ul`
  display: -ms-flexbox;
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 10px;
  background-color: #eee;
  margin: 0;
  padding: 0.2em 0.4em;
`;

export const StyledAActive = styled.a`
  position: relative;
  display: block;
  padding: 0.5em 0.95em;
  margin-left: -1px;
  line-height: 1.25;
  color: #333;
  font-family: Bold;
  background-color: #fff;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  font-size: 0.85em;
  border-radius: 8px;
  z-index: 3;
`;
