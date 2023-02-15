import styled from "styled-components";

interface Props {
    weight: number | string ;
  }

const Text = styled.p<Props>`
    /* EXEMPLO DE USO: <Text className="heading2" weight="600">Ola</Text> */
    font-family: ${props => props.theme.fonts.titles};
    font-weight: ${props => props.weight};

    &.heading1{
        font-size: 44px;
        font-weight: 700;
    }

    &.heading2{
        font-size: 36px;
        font-weight: 600;
    }
    
    &.heading3{
        font-size: 32px;
    }

    &.heading4{
        font-size: 28px;
    }

    &.heading5{
        font-size: 24px;
    }

    &.heading6{
        font-size: 20px;
    }

    &.heading7{
        font-size: 16px;
    }

    &.body1{
        font-size: 16px;
        font-family: ${props => props.theme.fonts.texts};
    }
    
    &.body2{
        font-size: 14px;
        font-family: ${props => props.theme.fonts.texts};
    }

    `

export default Text