import styled from "styled-components";

export const CommentsContainer = styled.section`
  max-width: 751px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;

  @media (min-width: 1000px) {
    margin: 0 0px 50px 0px;
    width: 95%;
  }
  @media (min-width: 1400px) {
    margin: 0 12px 50px 182px;
    width: 80%;
  }
`;
export const Commentslist = styled.div`
  max-width: 751px;
  width: 95%;
  padding: 28px 28px 36px 28px;
  margin-bottom: 28px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.grey10};

  @media (min-width: 1000px) {
    width: 100%;
  }
`;
export const Comment = styled.div`
  background-color: ${(props) => props.theme.colors.grey10};
  width: 100%;
  margin-top: 44px;

  div {
    display: flex;
    align-items: center;

    span {
      font-size: 12px;
      color: ${(props) => props.theme.colors.grey3};
      margin-left: 5px;
    }
  }
  .txt_comment {
    margin-top: 16px;
    color: ${(props) => props.theme.colors.grey2};
  }
`;

export const CommentsArea = styled.div`
  max-width: 751px;
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.grey10};

  .user {
    display: flex;
    width: 100%;
    margin-bottom: 24px;
  }

  .txt_area {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    #comment {
      border: none;
      width: 100%;
      height: 128px;
      font-size: 16px;
      font-weight: 400;
      padding: 28px 10px 10px 28px;
      border: 1.5px solid ${(props) => props.theme.colors.grey7};
      border-radius: 4px;
      outline: none;
      resize: none;
    }

    .btn {
      margin-top: 24px;
      padding: 10px 20px;
    }
  }

  .shortcut {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 12px;
    margin-top: 24px;
    flex-direction: row;
    flex-wrap: wrap;

    span {
      padding: 5px 12px;
      background-color: ${(props) => props.theme.colors.grey7};
      color: ${(props) => props.theme.colors.grey3};
      border-radius: 24px;
      margin-right: 10px;
      margin-bottom: 10px;
      cursor: pointer;
    }
  }

  @media (min-width: 700px) {
    .txt_area {
      width: 100%;
      height: 135px;
      display: flex;
      justify-content: center;
      flex-direction: row;
      border: 1.5px solid ${(props) => props.theme.colors.grey7};
      border-radius: 4px;

      #comment {
        border: none;
        width: 85%;
        font-size: 16px;
        font-weight: 400;
        padding: 28px 10px 10px 28px;
        outline: none;
        resize: none;
      }

      .btn {
        position: relative;
        right: 7px;
        top: 79px;
        padding: 10px 20px;
        margin: 0;
      }
    }
  }
  @media (min-width: 1000px) {
    width: 100%;
  }
`;

export const BtnEditComment = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.grey3};
  margin: 0px 5px;
  cursor: pointer;
`;

export const EditArea = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  margin-top: 10px;
  border: 1.5px solid ${(props) => props.theme.colors.grey7};
  border-radius: 4px;
  padding-right: 5px;

  @media (min-width: 700px) {
    width: 60%;
    height: 90px;
  }

  textarea {
    width: 90%;
    height: 100%;
    border: none;
    font-weight: 400;
    padding: 28px 10px 10px 28px;
    outline: none;
    resize: none;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100%;
    justify-content: space-between;
    align-items: flex-end;

    > button {
      width: 50%;
      margin-top: 5px;
      background-color: transparent;
      border: none;
      color: ${(props) => props.theme.colors.grey3};
      cursor: pointer;
    }

    .comment--edit__buttons {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      height: 30%;
      width: 100%;

      .edit--button__delete {
        &:hover {
          color: ${(props) => props.theme.colors.alert1};
          opacity: 0.5;
        }
      }

      .edit--button__confirm {
        &:hover {
          color: ${(props) => props.theme.colors.sucess1};
        }
      }

      @media (min-width: 700px) {
        flex-direction: row;
      }
    }
  }
`;
