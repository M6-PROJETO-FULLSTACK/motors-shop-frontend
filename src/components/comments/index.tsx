import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import {
  CommentsContainer,
  CommentsArea,
  Commentslist,
  Comment,
  BtnDelete,
} from "./style";
import { Button } from "../../styles/buttons";
import MiniProfile from "../MiniProfile";
import Text from "../../styles/texts";
import api from "../../services/api";
import { VehiclelContext } from "../../providers/VehicleContext";
import { AuthContext } from "../../providers/AuthContext";
import { IComment } from "../../interfaces/Comments";
import { FaTrashAlt } from "react-icons/fa";
import { IUser } from "../../interfaces/User";

const Comments = () => {
  const {
    comment,
    setComment,
    listComments,
    setListComments,
    vehicle,
    setVehicle,
    response,
    getDate,
    postComment,
    deleteComment,
    userId,
  } = useContext(VehiclelContext);

  const { user } = useContext(AuthContext);

  // const [user, setUser] = useState(true);
  // const [userData, setUserData] = useState<IUser>({} as IUser);

  console.log(listComments);

  const { id } = useParams();

  useEffect(() => {
    const getVehicle = async () => {
      try {
        const { data } = await api.get(`/vehicles/${id}`);
        setVehicle(data);
        setListComments(data.comments);
      } catch (error) {
        console.error(error);
      }
    };
    getVehicle();
  }, [response]);

  return (
    <CommentsContainer>
      <Commentslist>
        <Text className="heading6" weight={600}>
          Comentários
        </Text>
        {vehicle && (
          <>
            {listComments.map((comment: IComment) => (
              <>
                <Comment key={comment.id}>
                  <div className="user">
                    <MiniProfile userId={""} userName={comment.user.name} />
                    <span>&bull; {getDate(comment.created_at)}</span>
                    {userId === comment.user_id && (
                      <BtnDelete onClick={() => deleteComment(comment.id)}>
                        <FaTrashAlt />
                      </BtnDelete>
                    )}
                  </div>
                  <Text className="body2 txt_comment" weight={400}>
                    {comment.message}
                  </Text>
                </Comment>
              </>
            ))}
          </>
        )}
      </Commentslist>
      <CommentsArea>
        {user ? (
          <>
            <div className="user">
              <MiniProfile userId={""} userName={user.name} />
            </div>
            <div className="txt_area">
              <textarea
                name="comment"
                id="comment"
                placeholder="Digitar comentário"
                value={comment}
                cols={2}
                rows={10}
                onChange={(e) => setComment(e.target.value)}
              />
              <Button
                className="brand medium btn"
                onClick={() => postComment(comment, id)}
              >
                Comentar
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="user">
              <MiniProfile userId={""} userName={"Anônimo"} />
            </div>
            <div className="txt_area">
              <textarea
                name="comment"
                id="comment"
                placeholder="Digitar comentário"
                cols={2}
                rows={10}
                disabled
              />
              <Link to={"/login"}>
                <Button className="disable medium btn">Comentar</Button>
              </Link>
            </div>
          </>
        )}
        <div className="shortcut">
          <span onClick={() => setComment("Gostei muito!")}>Gostei muito!</span>
          <span onClick={() => setComment("Incrível")}>Incrível</span>
          <span onClick={() => setComment("Recomendarei para meus amigos!")}>
            Recomendarei para meus amigos!
          </span>
        </div>
      </CommentsArea>
    </CommentsContainer>
  );
};

export default Comments;
