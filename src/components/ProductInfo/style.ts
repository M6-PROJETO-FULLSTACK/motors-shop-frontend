import styled from "styled-components";

export const ProductInfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.grey10};
    
    max-width: 46rem;
    width: 100%;
    height: 15rem;

    @media screen and (max-width: 425px){
        height: 17rem;
    }
`

export const SectionProductInfo = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .container__info--button {
        max-width: 41rem;
        width: 100%;
    }

    @media screen and (max-width: 720px){
        padding: 5px 20px 5px 20px;
    }
`

export const ContainerProductInfoFooter = styled.div`
    max-width: 41rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;

    @media screen and (max-width: 425px){
        align-items: flex-start;
        flex-direction: column;
        gap: 15px;
    }

    .container__info--km--year {
        display: flex;
        gap: 10px;
    }

    .info__km--year {
        min-width: 3rem;
        max-width: 10rem;
        height: 32px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 4px 8px;
    
        background: ${(props) => props.theme.colors.brand4};
        border-radius: 4px;
    
        line-height: 24px;
    
        color: ${(props) => props.theme.colors.brand1};
    }
`