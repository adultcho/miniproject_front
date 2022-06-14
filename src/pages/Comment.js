import React from "react";


const Comment = (props) => {
  return (
    <>
      <div className="detail_comment_list_information">
        <span>{props.userNickname}</span>
        <span>{props.username}</span>
        <span>{props.createdAt}</span>
      </div>
      <p>{props.comment}</p>
      <div className="detail_comment_list_modify">
        <button>수정</button>
        <button>삭제</button>
      </div>
    </>
  );
};

export default Comment;
