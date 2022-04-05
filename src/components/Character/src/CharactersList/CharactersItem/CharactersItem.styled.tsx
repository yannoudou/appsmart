import styled from "styled-components";

export const ContainCharactersDetail = styled.div<{ img: string }>`
  /* height:68.75rem; */
  background-color: #fff;
  background: #fff;
  /* margin-top:2.875rem; */
  margin-bottom: 1.375rem;
  border-radius: 20px;
  padding: 8.5px;
  cursor: pointer;
  position: relative;
  min-height: 12em;
  height: 100%;
  margin-top: 2rem;
  box-shadow: 0px 50px 60px rgb(0 0 0 / 10%);
  &:hover {
    box-shadow: 0px 50px 60px rgb(0 0 0 / 10%);
  }
  & > .cover {
    height: 320px;
    border-radius: 15px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;

    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    position: relative;
  }
  & > .cover > div {
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 1;
    backdrop-filter: blur(6px);

    border-radius: 15px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    /* padding: 15px; */
    overflow: hidden;
  }
  & > .cover > div > div {
    border-radius: 15px;
    background-position: 50% 0%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${(p) => p.img});
    height: 100%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }

  & > div .price {
    padding: 0.5rem 1rem;
    border-radius: 25px;
    background: #fc0;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    color: #2a2e54;
  }
  & > .contain {
    padding: 12px;
  }
  & > .contain > h4 {
    font-family: gheavy;
    font-size: 1.2em;
    margin-top: 0.2em;
    position: relative;
    z-index: 1;
  }

  & > .contain > h4 > span {
    position: relative;
    color: #4d33ba;
  }
  & > .contain > h4 > span > i {
    font-family: Heavy;
    font-style: normal;
  }

  & > .contain > p {
    font-family: Book;
    font-size: 1.15em;
  }
  & > .contain > h5 {
    font-family: Book;
    font-size: 0.9em;
  }
  & > div > div {
    text-align: left;
    margin-bottom: 1rem;
    & > span {
      color: #788b87;
      font-family: Book;
      font-size: 0.9rem;
    }
  }
`;

export const ContainLoader = styled.div`
  height: 30rem;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 1.6rem;
  margin-bottom: 1.6rem;
`;
