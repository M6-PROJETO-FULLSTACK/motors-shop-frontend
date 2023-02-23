import styled from "styled-components";

const BoxMain = styled.div`
    width: 100vw;
    max-height: 623px;
    height: 580px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.brand1};
    
    .containerInfo{
        width: 95%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        .title{
            color: ${props => props.theme.colors.grey10};
            width: 95%;
            margin-bottom: 52px;
            
        }
        .subtitle{
            color: ${props => props.theme.colors.grey9};
            width: 90%;
            margin-bottom: 52px;            
        }

        .buttons{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 15px;
           
            .link{
                width: 100%;
            }
        }
    }
    
    @media (min-width: 600px){
        width: 100%;
        .containerInfo{
            .buttons{
                flex-direction: row;
                
                .link{
                    width: 182px;
                }
            }
        }
    }

    @media (min-width: 750px){
        .containerInfo{
            .title{
                width: 748px;
                
            }
            .subtitle{
                width: 388px;
            }
        }
    }

`

export default BoxMain