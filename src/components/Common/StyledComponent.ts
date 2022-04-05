import { Row, Col } from "react-bootstrap";
import styled from "styled-components";


export const StyledRow = styled(Row)`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    `;

export const StyledCol = styled(Col) <{ margin?: string }>`
    display: flex;
    flex-direction: column;  
    margin-bottom: ${props => {
        if (props.margin)   return props.margin; 
        return 0;
    }};
    `;
 
 