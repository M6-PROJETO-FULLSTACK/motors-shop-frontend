import {useState} from 'react'
import { Container, NavContainer, UserUl ,NavUl} from "./style"
import {BiMenu} from 'react-icons/bi'
import { GrFormClose } from 'react-icons/gr'
import { LinkBtn } from "../../styles/buttons"

const Navbar = () => {
    const [menuIsVisible, setMenuIsVisible] = useState(false)
    const [submenuIsVisible, setSubmenuIsVisible] = useState(false)
    const [user, setUser] = useState(true)
    const [isAdm, setIsAdm] = useState(false)

    return(
        <>
        <Container>
            <img src="" alt="Logo" />
            <NavContainer isVisible={menuIsVisible} submenuIsVisible>
                <NavUl>
                    <li>
                        <LinkBtn className="medium" as='a'>Carros</LinkBtn>
                    </li>
                    <li>
                        <LinkBtn className="medium" as='a'>Motos</LinkBtn>
                    </li>
                    <li>
                        <LinkBtn className="medium" as='a'>Leilão</LinkBtn>
                    </li>
                </NavUl>
                <div className="separator"></div>
                    {
                        user?
                        (<UserUl>
                            <li onClick={()=>setSubmenuIsVisible(true)}>
                                <div>
                                    <span>SL</span>
                                </div>
                                <LinkBtn className="medium" as='a'  >Samuel Leão</LinkBtn>
                            </li>
                            <ul>
                                <li>
                                    <LinkBtn className="medium" as='a'>Editar Perfil</LinkBtn>
                                </li>
                                <li>
                                    <LinkBtn className="medium" as='a'>Editar Endereço</LinkBtn>
                                </li>
                                {
                                    isAdm?
                                    <li>
                                        <LinkBtn className="medium" as='a'>Meus Anúncios</LinkBtn>
                                    </li>
                                    :
                                    null
                                }
                                <li>
                                    <LinkBtn className="medium" as='a' onClick={() => setUser(false)}>sair</LinkBtn>
                                </li>
                            </ul>
                        </UserUl>)
                        :
                        (   
                        <NavUl>
                            <li>
                                <LinkBtn className="medium" as='a'>Fazer Login</LinkBtn>
                            </li>
                            <li>
                                <LinkBtn className="outlineGrey medium btn_li" as='a'>Cadastrar</LinkBtn>
                            </li>
                        </NavUl>
                        )
                    }
            </NavContainer>
            {
                menuIsVisible?
                <button className="btn_menu" onClick={()=>setMenuIsVisible(false)} ><GrFormClose size={24}/></button>
                :
                <button className="btn_menu" onClick={()=>setMenuIsVisible(true)}><BiMenu size={24}/></button>
            }
        </Container>
    </>
    )
}

export default Navbar