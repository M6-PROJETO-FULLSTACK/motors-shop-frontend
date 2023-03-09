import {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { Container, NavContainer, UserUl ,NavUl} from "./style"
import {BiMenu} from 'react-icons/bi'
import { GrFormClose } from 'react-icons/gr'
import { LinkBtn } from "../../styles/buttons"
import logo from '../../assets/Logo_prymary.png'
import { AuthContext } from '../../providers/AuthContext'
import { ModalContext } from '../../providers/ModalContext'
import ModalEditUser from '../ModalEditUser'
import ModalEditAddress from '../ModalEditAddress'

const Navbar = () => {
    const [menuIsVisible, setMenuIsVisible] = useState(false)
    const [submenuIsVisible, setSubmenuIsVisible] = useState(false)
    const {user, logOut} = useContext(AuthContext)

    const { handleOpenEditAddress, handleOpenEditUser } = useContext(ModalContext);
    
    return(
        <>
        <Container>
            <Link to={'/home'}>
                <img src={logo} alt="logo" />
            </Link>
            <ModalEditUser />
            <ModalEditAddress />
            <NavContainer isVisible={menuIsVisible}>
                <NavUl>
                    <li>
                        <LinkBtn className="medium link_li" as='a' href='#carros'>Carros</LinkBtn>
                    </li>
                    <li>
                        <LinkBtn className="medium link_li" as='a' href='#motos'>Motos</LinkBtn>
                    </li>
                    <li>
                        <LinkBtn className="medium link_li" as='a' href='#leilao'>Leilão</LinkBtn>
                    </li>
                </NavUl>
                <div className="separator"></div>
                    {
                        user?
                        (<UserUl submenuIsVisible={submenuIsVisible}>
                            <li ><>
                            
                                <div>
                                    <span>{user.name.split(" ")[0][0] + user.name.split(" ")[user.name.split(" ").length - 1][0]}</span>
                                </div>
                                <LinkBtn onClick={()=>setSubmenuIsVisible(!submenuIsVisible)}>{user.name.length > 20 ? user.name.slice(0, 20) + "..." : user.name}</LinkBtn>
                            </>
                            </li>
                            <ul className='sub_menu'>
                                <li>
                                    <LinkBtn className="medium" as='a' onClick={handleOpenEditUser}>Editar Perfil</LinkBtn>
                                </li>
                                <li>
                                    <LinkBtn className="medium" as='a' onClick={handleOpenEditAddress}>Editar Endereço</LinkBtn>
                                </li>
                                {
                                    user.type === true?
                                    <li>
                                        <Link to={`/profile/${user.id}`}>
                                            <LinkBtn className="medium" as='a'>Meus Anúncios</LinkBtn>
                                        </Link>
                                    </li>
                                    :
                                    null
                                }
                                <li>
                                    <LinkBtn className="medium" as='a' onClick={() => logOut()}>Sair</LinkBtn>
                                </li>
                            </ul>
                        </UserUl>)
                        :
                        (   
                        <NavUl>
                            <li>
                                <Link to={'/login'}>
                                <LinkBtn className="medium link_li" as='a'>Fazer Login</LinkBtn>
                                </Link>
                            </li>
                            <li className="li_btn">
                                <Link to={'/register'}>
                                <LinkBtn className="outlineGrey medium btn_li" as='a'>Cadastrar</LinkBtn>
                                </Link>
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