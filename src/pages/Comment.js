import axios from "axios";
import React from "react";


const Comment = (props) => {
  // console.log(props)

  const userName = localStorage.getItem('user-name');
  const now_user = props.comment.username;
  // const commentContent = props.comment.commentContent


  
  // 댓글 수정판!!
  const insert_comment = () =>{
    let New_comment = prompt('댓글을 수정해주세요');
    axios.put('http://localhost:5001/commentList/3',{
      commentContent : New_comment
    }).then((response)=>{
      console.log(response)
    }).catch((err)=>{
      console.log(err)
    })

    alert('수정되었습니다')
    window.location.reload()

  }


  const delete_comment = () =>{

    axios.delete('http://localhost:5001/commentList/1')
    .then((res)=>{
      console.log(res)
    })


    alert('삭제되었습니다')
    window.location.reload()


  }








  return (
    <div className="C_wrap">
      <div className="C_p">
        <p>유저 닉네임 :  {props.comment.userNickname}</p>
        <p>유저 이메일 :  {props.comment.username}</p>
      </div>
      <div className="C_title">
      {props.comment.commentContent} 
      { userName === now_user ? 
        <div>
        <button className="bt_insert" onClick={insert_comment}>수정</button>
        <button className="bt_delete" onClick={delete_comment}>삭제</button>
        </div>
        :
        null
        }

        </div>
    </div>
  )
};

export default Comment;
