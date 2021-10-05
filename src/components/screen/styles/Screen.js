import styled from "styled-components";

export const Container = styled.div`
    
    
    padding: 1rem;
    width: 300px;
    text-align: right;
    font-size: 3rem;

    
`
export const Unit = styled.div`

    display: inline-block;
    font-size: 1rem;
    ${({rem})=> rem && "font-size: 0.7rem"}

`