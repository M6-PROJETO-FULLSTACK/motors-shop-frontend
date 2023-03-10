import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import {
  CommentsContainer,
  CommentsArea,
  Commentslist,
  Comment,
  BtnEditComment,
  EditArea,
  ContainerDelete,
  EmptyComments,
} from "./style";
import { Button } from "../../styles/buttons";
import MiniProfile from "../MiniProfile";
import Text from "../../styles/texts";
import api from "../../services/api";
import { VehiclelContext } from "../../providers/VehicleContext";
import { AuthContext } from "../../providers/AuthContext";
import { IComment } from "../../interfaces/Comments";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import { BsCheckLg } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";
import ModalDelete from "../DeleteModal";

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
    setOpenDelete,
  } = useContext(VehiclelContext);

  const { user } = useContext(AuthContext);

  const [targetComment, setTargetComment] = useState("");
  const [editContent, setEditContent] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const getVehicle = async () => {
      try {
        const { data } = await api.get(`/vehicles/${id}`);
        setVehicle(data.vehicle);
        setListComments(data.vehicle.comments);
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
          <>
            <Text className="heading6" weight={600}>
              Comentários
            </Text>
            {vehicle && (
              <>
                {listComments.length >= 1 ? (
                  <>
                    {listComments.map((comment: IComment) => (
                      <>
                        <Comment key={comment.id}>
                          <div className="comment__header">
                            <div className="user">
                              <MiniProfile
                                userId={comment.user.id}
                                userName={comment.user.name}
                              />
                              <span>
                                &bull;{" "}
                                {comment.created_at !== comment.updated_at
                                  ? getDate(comment.updated_at)
                                  : getDate(comment.created_at)}
                              </span>
                            </div>
                            {userId === comment.user_id && (
                              <div>
                                <BtnEditComment
                                  onClick={() => {
                                    setTargetComment(comment.id);
                                    setEditContent(comment.message);
                                  }}
                                >
                                  <FiEdit3 />
                                </BtnEditComment>
                              </div>
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
                                    onClick={() => setOpenDelete(true)}
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
                ) : (
                  <EmptyComments>
                    <Text weight="600">
                      Ops! Parece que não há nada por aqui...
                    </Text>
                    <Text className="body2" weight="400">
                      Seja você o primeiro a comentar
                    </Text>
                  </EmptyComments>
                )}
              </>
            )}
          </>
        </Commentslist>
        <CommentsArea>
          {user ? (
            <>
              <div className="user">
                <MiniProfile userId={user.id} userName={user.name} />
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
                <MiniProfile />
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

      <ModalDelete title="Excluir comentário">
        <h3>Tem certeza que deseja remover este comentário?</h3>
        <p>
          Essa ação não pode ser desfeita. Isso excluirá permanentemente seu
          comentário de nossos servidores.
        </p>
        <ContainerDelete>
          <Button onClick={() => setOpenDelete(false)}>Cancelar</Button>
          <Button
            className="alert"
            onClick={() => deleteComment(targetComment)}
          >
            Excluir
          </Button>
        </ContainerDelete>
      </ModalDelete>
    </>
  );
};

export default Comments;
