import { useState } from "react"
import { Link } from "react-router-dom"
import { CommentsContainer, CommentsArea, Commentslist, Comment} from "./style"
import { Button } from "../../styles/buttons"
import MiniProfile from "../MiniProfile"
import Text from "../../styles/texts"

const Comments = () => {
    const [user, setUser] =useState(true)
    return(
        <CommentsContainer>
            <Commentslist>
                <Text className="heading6" weight={600}>Comentários</Text>
                <Comment>
                    <div className="user">
                        <MiniProfile userId={""} userName={"Marcos Aurelio"}/>
                        <span>&bull; há 3 dias</span>
                    </div>
                    <Text className="body2 txt_comment" weight={400}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Temporibus quibusdam eius repudiandae dolor voluptates neque porro laudantium voluptas aperiam harum 
                    consectetur quod quae, ipsum vel sit perferendis suscipit aliquid nulla?</Text>
                </Comment>
                <Comment>
                    <div className="user">
                        <MiniProfile userId={""} userName={"Marcos Aurelio"}/>
                        <span>&bull; há 3 dias</span>
                    </div>
                    <Text className="body2 txt_comment" weight={400}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Temporibus quibusdam eius repudiandae dolor voluptates neque porro laudantium voluptas aperiam harum 
                    consectetur quod quae, ipsum vel sit perferendis suscipit aliquid nulla?</Text>
                </Comment>
                <Comment>
                    <div className="user">
                        <MiniProfile userId={""} userName={"Marcos Aurelio"}/>
                        <span>&bull; há 3 dias</span>
                    </div>
                    <Text className="body2 txt_comment" weight={400}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Temporibus quibusdam eius repudiandae dolor voluptates neque porro laudantium voluptas aperiam harum 
                    consectetur quod quae, ipsum vel sit perferendis suscipit aliquid nulla?</Text>
                </Comment>
            </Commentslist>
            <CommentsArea>
                {
                   user?
                   (               
                       <>
                        <div className="user">
                            <MiniProfile userId={""} userName={"Samuel Leão"} />
                        </div>
                        <div className="txt_area">
                            <textarea name="comment" id="comment" placeholder="Digitar comentário" cols={2} rows={10}/>
                            <Button className="brand medium btn">Comentar</Button>
                        </div>
                        <div className="shortcut">
                            <span>Gostei muito!</span>
                            <span>Incrível</span>
                            <span>Recomendarei para meus amigos!</span>
                        </div>
                       </>     
                    )
                :
                (
                    <>
                    <div className="txt_area">
                        <textarea name="comment" id="comment" placeholder="Digitar comentário" cols={2} rows={10} disabled/>
                        <Link to={'/login'}>
                            <Button className="disable medium btn" >Comentar</Button>
                        </Link>
                    </div>
                    <div className="shortcut">
                        <span>Gostei muito!</span>
                        <span>Incrível</span>
                        <span>Recomendarei para meus amigos!</span>
                    </div>
                    </>
                    )
                }
            </CommentsArea>
        </CommentsContainer>


    )
}

export default Comments