import styled from "styled-components";

export const Card = styled.li`
    width: 100%;
    background: #FFF;
    list-style: none;
    border: 3px solid #E0E0E0;
    border-radius: 8px;

    p {
        padding: 15px 15px 0;
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
    };

    &:hover {
        border-color: #27AE60;

        button {
            background-color: #27AE60;
            border-color: #27AE60;
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