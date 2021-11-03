import styled from "styled-components";

export const IconButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
    border-radius: 100%;
    padding: 7px;

    &:hover {
        background-color: #BDBDBD;
    };

    svg {
        color: #828282;
        font-size: 2rem;
    };
`;

export const CartModal = styled.div`
    width: 90%;
    max-width: 500px;
    min-height: 35vh;
    max-height: 95vh;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 50vh auto;
    transform: translateY(-50%);
`;

export const CartModalHeader = styled.header`
    background-color: #27AE60;
    border-radius: 5px 5px 0px 0px;
    height: 54px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    position: sticky;
    top: 0;
    
    h4 {
        font-family: "Inter";
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 28px;
        color: #FFFFFF;
    };
`;

export const CartModalMain = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 68vh;
    min-height: 25vh;
    overflow-y: auto;
    
    ul {
        width: 100%;
        height: 100%;
        max-height: 68vh;
        margin: 0 15px;
        flex-direction: row;
        flex-wrap: wrap;
    };

    div {
        h3, p {
            font-family: "Inter";
            font-style: normal;
            line-height: 24px;
            text-align: center;
        };
        
        h3 {
            font-weight: bold;
            font-size: 18px;
            color: #333333;
        };

        p {
            font-weight: normal;
            font-size: 14px;
            color: #828282;
        };
    };
`;

export const CartModalFooter = styled.footer`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    p{
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: #333333;
    };

    .price {
        color: #828282;
    };

    .totalValue{
        border-top: 2px solid #E0E0E0;
        padding: 15px 0;
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 15px;
        padding: 0 0 10px 0;
    };

    button {
        width: 94.5%;
        padding: 15px 15px;
        margin: 0 auto 10px;
        font-weight: 600;
        color: #FFFFFF;
        background-color: #BDBDBD;
        border: 2px solid #BDBDBD;
        border-radius: 6px;
        cursor: pointer;
    }
`;