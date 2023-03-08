import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import {
  CommentsContainer,
  CommentsArea,
  Commentslist,
  Comment,
  BtnEditComment,
  EditArea,
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
import { FiEdit3 } from "react-icons/fi";
import { BsCheckLg } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";

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
    editCommentFn,
  } = useContext(VehiclelContext);

  const { user } = useContext(AuthContext);

  const [targetComment, setTargetComment] = useState("");
  const [editContent, setEditContent] = useState("");

  // const [userData, setUserData] = useState<IUser>({} as IUser);

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
    <>
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
                      <span>
                        &bull;{" "}
                        {comment.created_at !== comment.updated_at
                          ? getDate(comment.updated_at)
                          : getDate(comment.created_at)}
                      </span>
                      {userId === comment.user_id && (
                        <>
                          <BtnEditComment
                            onClick={() => {
                              setTargetComment(comment.id);
                              setEditContent(comment.message);
                            }}
                          >
                            <FiEdit3 />
                          </BtnEditComment>
                        </>
                      )}
                    </div>
                    {targetComment === comment.id ? (
                      <EditArea>
                        <textarea
                          name=""
                          id=""
                          placeholder="Teste"
                          value={editContent}
                          onChange={(e) => setEditContent(e.target.value)}
                        />
                        <div>
                          <button onClick={() => setTargetComment("")}>
                            <RiCloseFill />
                          </button>
                          <div className="comment--edit__buttons">
                            <BtnEditComment
                              className="edit--button__delete"
                              onClick={() => deleteComment(comment.id)}
                            >
                              <FaTrashAlt />
                            </BtnEditComment>
                            <BtnEditComment
                              className="edit--button__confirm"
                              onClick={() => {
                                editCommentFn(comment.id, editContent);
                                setTargetComment("");
                              }}
                            >
                              <BsCheckLg />
                            </BtnEditComment>
                          </div>
                        </div>
                      </EditArea>
                    ) : (
                      <Text className="body2 txt_comment" weight={400}>
                        {comment.message}
                      </Text>
                    )}
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
            <span onClick={() => setComment("Gostei muito!")}>
              Gostei muito!
            </span>
            <span onClick={() => setComment("Incrível")}>Incrível</span>
            <span onClick={() => setComment("Recomendarei para meus amigos!")}>
              Recomendarei para meus amigos!
            </span>
          </div>
        </CommentsArea>
      </CommentsContainer>
    </>
  );
};

export default Comments;
