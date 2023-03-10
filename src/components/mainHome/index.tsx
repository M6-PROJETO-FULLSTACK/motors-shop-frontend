import BoxMain from "./style"
import Text from "../../styles/texts"
import { LinkBtn } from "../../styles/buttons"

const MainHome = () => {
    return(
        <BoxMain>
            <div className="containerInfo">
                <Text className="heading2 title" weight={700}>Velocidade e experiência em um lugar feito para você</Text>
                <Text className="body1 subtitle" weight={400}>Um ambiente feito para você explorar o seu melhor</Text>
                <div className="buttons">
                    <LinkBtn className='outlineLight link' as='a' href='#carros'>Carros</LinkBtn>
                    <LinkBtn className='outlineLight link' as='a' href='#motos'>Motos</LinkBtn>
                </div>
            </div>
        </BoxMain>
    )
}

export default MainHome