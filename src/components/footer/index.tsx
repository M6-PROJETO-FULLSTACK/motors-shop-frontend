import Text from '../../styles/texts'
import { Container } from "./style"
import {FaAngleUp} from 'react-icons/fa'

const Footer = () => {
    return(
        <Container>
            <Text weight={600} className='heading3 logo_text'>Motors <span className='logo_span'>shop</span></Text>
            <Text weight={400} className='body2 text_footer'><span>&copy; </span>2022 - Todos os direitos reservados</Text>
            <button className="btn_footer"><FaAngleUp size={14}/></button>
        </Container>
    )
}

export default Footer