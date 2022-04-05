import { colors } from "@helpers/colors";
import styled from "styled-components";

export const ContainError = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100vh;
& > div > div > svg {
    font-size:14rem;
}
& > div > div  {
    /* text-align:center; */
    margin-bottom:3rem;
}
& > div {
    max-width:700px;
    padding:2rem;
    display:block ;
}
& > div > h1 {
    font-family:gheavy;
font-size:4.5rem;
}
& > div > h2 {
    font-family:Bold;
margin-bottom:5rem;
font-size:2rem;
}
& > div > p {
    font-size:1.7rem;
color:${colors.black3};
font-family:Book;
}

`;