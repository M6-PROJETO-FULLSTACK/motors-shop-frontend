import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 10px 0;
    
    height: 350px;
    width: 100%;
    
    background-color: ${props => props.theme.colors.grey0};

    .logo_text{
        color: ${props => props.theme.colors.whiteFixed};
    }
    .logo_span{
        color: ${props => props.theme.colors.whiteFixed};
        font-size: 18px;
    }

    .text_footer{
        color: ${props => props.theme.colors.whiteFixed};
    }

    .btn_footer{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 53px;
        height: 50px;
        padding: 10px;
        border-radius: 4px;
        background-color: ${props => props.theme.colors.grey1};
        color: ${props => props.theme.colors.whiteFixed};
        cursor: pointer;
        border: none;

    }
    @media  (min-width: 430px){
        flex-direction: column;
    }
    
    @media  (min-width: 600px){
        flex-direction: row;
        height: 140px;
        padding: 40px 0;
    }


`

