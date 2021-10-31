import styled from "styled-components";

export const AsideSection = styled.section`
    width: 100%;
    margin: auto;
    max-width: 500px;
    
    .imageDesktop {
        display: none;
    }
    
    @media (min-width: 769px){
        .imageDesktop {
            display: block;
        }
    }
`;

export const DivMessage = styled.div`
    max-width: 400px;
    padding: 15px;
    border: 1px solid #E0E0E0;
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    margin: 30px auto;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(39, 174, 96, 0.1);
        min-width: 60px;
        min-height: 60px;
        margin-right: 15px;
    };

    p {
        font-family: "Inter";
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
    };

    @media (min-width: 769px){
        margin: 30px 0;
    }
`;