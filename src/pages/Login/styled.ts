import styled from "styled-components";

export const LoginMain = styled.main`
    width: 100%;
    height: 100vh;
    max-width: 1200px;
    padding: 15px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    margin: auto;

    @media (min-width: 769px){
        flex-direction: row;
        gap: 15px
    }
`;

export const LoginForm = styled.form`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid #E0E0E0;
    padding: 20px;
    gap: 20px;
    margin: auto;

    header {
        width: 100%;

        h3 {
            font-family: "Inter";
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 24px;
            text-align: start;
        };
    };

    p {
        font-family: "Inter";
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        color: #999999;
    }
`;

export const ButtonStyled = styled.button`
    width: 100%;
    padding: 18px 30px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    color: #FFFFFF;
    background: #93D7AF;
    border-radius: 6px;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #27AE60;
    };
`;

export const ButtonRedirectStyled = styled.button`
    width: 100%;
    padding: 18px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    color: #999999;
    background: #F5F5F5;
    border-radius: 6px;
    border: none;
    cursor: pointer;

    &:hover {
        color: #E0E0E0;
        background-color: #828282;
    };
`;