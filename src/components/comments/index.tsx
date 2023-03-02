import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  CommentsContainer,
  CommentsArea,
  Commentslist,
  Comment,
} from "./style";
import { Button } from "../../styles/buttons";
import MiniProfile from "../MiniProfile";
import Text from "../../styles/texts";
import api from "../../services/api";
import { VehiclelContext } from "../../providers/VehicleContext";
import { ICommentProp } from "../../providers/VehicleContext";

const Comments = () => {
  const {
    comment,
    setComment,
    listComments,
    setListComments,
    vehicle,
    setVehicle,
    response,
    setResponse,
  } = useContext(VehiclelContext);

  const [user, setUser] = useState(true);

  useEffect(() => {
    const getVehicle = async () => {
      const id = "8cef9bf5-88d4-43ed-9acd-9c7a627cb26d";
      //id do veiculo

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

  const sendComment = async (comment: string) => {
    const id = "8cef9bf5-88d4-43ed-9acd-9c7a627cb26d";
    const token = localStorage.getItem("@MotorsShop:token");
    const data = {
      message: comment,
    };
    api.defaults.headers.authorization = `Bearer ${token}`;
    const res = await api.post(`/comments/${id}`, data);

    setResponse(res.data);
    console.log(response);
  };

  return (
    <CommentsContainer>
      <Commentslist>
        <Text className="heading6" weight={600}>
          Comentários
        </Text>
        {vehicle && (
          <>
            {listComments.map((comment: ICommentProp) => (
              <Comment key={comment.id}>
                <div className="user">
                  <MiniProfile userId={""} userName={comment.user.name} />
                  <span>&bull; há 3 dias</span>
                </div>
                <Text className="body2 txt_comment" weight={400}>
                  {comment.message}
                </Text>
              </Comment>
            ))}
          </>
        )}
      </Commentslist>
      <CommentsArea>
        <>
          <div className="user">
            <MiniProfile userId={""} userName={"Samuel Leão"} />
          </div>
          <div className="txt_area">
            {user ? (
              <>
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
                  onClick={() => sendComment(comment)}
                >
                  Comentar
                </Button>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
          <div className="shortcut">
            <span onClick={() => setComment("Gostei muito!")}>
              Gostei muito!
            </span>
            <span onClick={() => setComment("Incrível")}>Incrível</span>
            <span onClick={() => setComment("Recomendarei para meus amigos!")}>
              Recomendarei para meus amigos!
            </span>
          </div>
        </>
      </CommentsArea>
    </CommentsContainer>
  );
};

export default Comments;
