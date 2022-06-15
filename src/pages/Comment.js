import axios from "axios";
import React from "react";

const Comment = (props) => {
  

  const userName = localStorage.getItem("user-name");
  const now_user = props.username;
  // const commentContent = props.comment.commentContent

  const token = localStorage.getItem("refresh-token");

  console.log(props)

  // 댓글 수정판!!
  const insert_comment = async () => {
    let New_comment = prompt("댓글을 수정해주세요");
    console.log(New_comment);
    let put_comment = { commentContent: New_comment };
    console.log(put_comment);
    await axios
      .put("http://13.125.151.93/api/putcomment/" + props.commentId, put_comment, {
        headers: { Authorization: `${token}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
      if(New_comment===null){
        return(
          alert("취소되었습니다.")
            );
        }
      alert("수정되었습니다.")
    window.location.reload()
  };

  const delete_comment = () => {
    axios
      .delete("http://13.125.151.93/api/deletecomment/" + props.commentId, {
        headers: { Authorization: `${token}` },
      })
      .then((res) => {
        console.log(res);
      });

    alert("삭제되었습니다");
    window.location.reload()
  };

  return (
    <div className="C_wrap">
      <div className="C_p">
        <p>유저 닉네임 : {props.userNickname}</p>
        <p>유저 이메일 : {props.username}</p>
      </div>
      <div className="C_title">
        {props.comment}
        {userName === now_user ? (
          <div>
            <button className="bt_insert" onClick={insert_comment}>
              수정
            </button>
            <button className="bt_delete" onClick={delete_comment}>
              삭제
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Comment;
