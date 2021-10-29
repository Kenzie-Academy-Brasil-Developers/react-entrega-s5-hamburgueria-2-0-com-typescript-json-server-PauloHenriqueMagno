import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h1 {
        cursor: pointer;
        padding: 5px;
    };

    nav{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 5px 0
    };
`;

export const Header = styled.header`
    width: 100%;
    background-color: #F5F5F5;
    padding: 5px;
    margin-bottom: 15px;
`;

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

export const SearchDiv = styled.div`

    input {
        display: none;
    };

    @media (min-width: 769px){
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FFFF;
        border: 2px solid #E0E0E0;
        border-radius: 5px;
        padding: 5px;
        margin: 0 5px;
        
        &:focus-within {
            border: 2px solid #333333;
            
        }
        
        input {
            display: block;
            border: none;
            font-size: 1rem;
            
            &::placeholder {
                color: #E0E0E0;
            }
            &:focus {
                outline: none;
            };
        };
    }
`

export const SearchButton = styled.button`
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

    @media (min-width: 769px){
        background-color: #27AE60;
        border-radius: 5px;
        padding: 4px;
    
        &:hover {
            background-color: #168821;
        };
    
        svg {
            color: #FFFF;
            font-size: 1.4rem;
        };
    }
`;