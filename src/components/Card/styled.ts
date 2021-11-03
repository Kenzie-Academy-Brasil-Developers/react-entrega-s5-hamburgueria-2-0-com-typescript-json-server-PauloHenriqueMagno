import styled from "styled-components";

export const Card = styled.li`
    width: 100%;
    height: 100%;
    background: #FFF;
    list-style: none;
    border: 3px solid #E0E0E0;
    border-radius: 8px;

    p, .name {
        padding: 15px 15px 0;
    };

    .name {
        font-family: "Inter";
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        color: #333333;
    };

    .category {
        color: #828282;
        font-size: 0.8rem
    };

    .price {
        color: #27AE60;
        font-weight: 600;
    };

    button {
        margin: 15px 15px;
        padding: 10px 15px;
        font-weight: 600;
        color: #FFFFFF;
        background-color: #BDBDBD;
        border: 2px solid #BDBDBD;
        border-radius: 6px;
        cursor: pointer;
        position: sticky;
        top: 100%;
    };

    &:hover {
        border-color: #27AE60;

        button {
            background-color: #27AE60;
            border-color: #27AE60;
        };
    };
`;

export const CardCart = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 0;

    .image {
        min-width: 90px;
        min-height: 90px;
        max-width: 90px;
        max-height: 90px;
        padding: 10px;
        background-color: #E0E0E0;
        border-radius: 8px;
    };

    .content {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: 1fr 1fr;
        align-items: flex-start;
        padding: 0 0 0 15px;
    };
    
    .nameAndButton {
        width: 100%;
        height: 30px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        
        .name {
            width: 90%;
            font-family: "Inter";
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            text-align: start;
            color: #333333;
        };

        button {
            margin: 0;
            
            svg {
                color: #BDBDBD;
            };
        };
    };

    .amountAndPrice {
        width: 100%;
        height: 47px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: auto;

        .buttons {
            display: flex;
            flex-direction: row;
            height: 40px;
            align-items: center;
            background-color: #F2F2F2;

            button {
                svg {
                    color: #EB5757;
                }
            };

            p {
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                background-color: #FFFFFF;
                width: 50px;
                height: 30px;
            };
        };
    };
`;

export const Image = styled.div`
    width: 100%;
    height: 150px;
    background-color: #F5F5F5;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px 8px 0 0;

    img {
        max-width: 100%;
        max-height: 100%;
    };
`;