import { colors } from "@helpers/colors";
import styled from "styled-components";


export const WelComeBox = styled.div`
 padding-top:7rem;
 padding-bottom:12rem;
 @media(max-width: 750px) { 
    padding-top:4rem;
 padding-bottom:8rem;

}
& > span {
    font-size: 1.8rem;
    font-family: gheavy;
    background: ${colors.second}; 
    padding-left: 0.4rem;
    padding-right: 0.4rem;
   color:${colors.black3};
}

& > h1 {
    padding-top:1rem;
    font-size:4.5rem;
   font-family:gheavy;
   color:${colors.dark};
   max-width:800px;
   @media(max-width: 750px) { 
    font-size:3.5rem; 
}
}

& > h1 > i {
    font-family:Heavy;
}

& > span > i {
    font-family:Heavy;
}
 
& > span > img {
  height: 2rem;
}

`;
