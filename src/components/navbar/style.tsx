import styled, { css } from "styled-components";

interface divProps {
    isVisible?: boolean;
    submenuIsVisible?: boolean;
  } 

export const Container = styled.header`
    height: 80px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;

    background-color: ${props => props.theme.colors.grey10};
    border-bottom: 2px solid ${props => props.theme.colors.grey6};
    
    .btn_menu{
        width: 50px;
        height: 50px;
        display: block;
        
        cursor: pointer;
        border: none;
        border-radius: 4px;
        background-color: ${props => props.theme.colors.grey10};
    }

    .separator{
        width: 100%;
        height:2px;
        background-color: ${props => props.theme.colors.grey6};
        margin: 10px;
    }
    

    @media (min-width: 750px){
        .btn_menu{
            display: none;
        }

        .separator{
            width: 2px;
            height:79px;
        }
    }
`

export const NavContainer = styled.div<divProps>`
    display: none;
    align-items: center;
    ${props => props.isVisible && css`
    display: flex;
    flex-direction: column;
    padding: 0 0 15px 0;
    z-index: 1;
    `};
    width: 100vw;
    position: absolute;
    top: 80px;
    right: 1px;
    background-color: ${props => props.theme.colors.grey9};
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);


    @media (min-width: 400px){
        display:none;
        ${props => props.isVisible && css`
        display: flex;
        width: 200px;
        position: absolute;
        right: 12px;
        top: 67px;
        margin-left: auto;
        `};
    }
        
    @media (min-width: 750px){
        display: none;
        width: auto;
        display: flex;
        flex-direction: row;
        position: relative;
        top: 0;
        right: 0;
        background-color: transparent;
        padding: 0;
        border: none;
        box-shadow: none;
        z-index: 1;
    }

`

export const UserUl = styled.ul`
    list-style: none;
    display: flex;
    gap:5px;
    flex-direction:column;
    width: 100%;
    align-items: center;
    text-align: left;

    li{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        div{
            width: 32px;
            height: 32px;
            color: ${props => props.theme.colors.whiteFixed};
            background: ${props => props.theme.colors.brand2};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 15px;
        }

        a{
            width: auto;
        }
    }

    @media (min-width: 750px){           
        flex-direction:row;
    }
`
export const NavUl = styled.ul`
    list-style: none;
    display: flex;
    gap:5px;
    flex-direction:column;
    width: 100%;
    align-items: center;
    text-align: left;

    li{
        width: 100%;
    }

    .btn_li{
        width: 80%;
    }

    @media (min-width: 750px){           
        flex-direction:row;
    }
`

