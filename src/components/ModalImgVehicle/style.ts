import styled from "styled-components";

export const ContainerModalImg = styled.div`
    width: 100%;
    height: 15rem;
    background-color: ${(props) => props.theme.colors.grey7};
    border-radius: 5px;
    display: flex;
        align-items: center;
        justify-content: center;

    img {
        width: 100%;
        height: 100%;
        

        @media screen and (max-width: 425px) {
            width: 80%;
            height: 80%;
        }
    }
`