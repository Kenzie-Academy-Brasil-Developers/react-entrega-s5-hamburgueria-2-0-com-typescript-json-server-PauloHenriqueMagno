import styled from "styled-components";

export const ProductList = styled.ul`
    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 5px;
    margin: auto;

    @media (min-width: 400px){
        grid-template-columns: 1fr 1fr;
    };
    @media (min-width: 700px){
        grid-template-columns: 1fr 1fr 1fr;
    };
    @media (min-width: 900px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
    };
`;