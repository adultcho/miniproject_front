import React from "react";
import Header from "./Header";
import axios from "axios";
import Comment from "./Comment";
import { useParams } from "react-router-dom";

const Detail = () => {
  let { studyId } = useParams();

  console.log(studyId);

  const [list, setList] = React.useState([]);
  // const [list, setList] = React.useState([]);
  const comment_ref = React.useRef(null);

  React.useEffect(() => {
    axios
      .get("http://13.125.151.93/api/getstudy/" + studyId) // back-end server http://13.125.151.93/api/poststudy
      .then((response) => {
        console.log(response);
        setList(response.data);
        console.log(response);
        response.data.reverse();
      })
      .catch((response) => {
        console.log(response);
      });
  }, [studyId]);

  const commentSubmitHandler = async (e) => {
    e.preventDefault();
    

    const comment_data = {
      commentContent: comment_ref.current.value,
    };
    console.log(comment_data);

    const token = localStorage.getItem("refresh-token");

    await axios
      .post("http://13.125.151.93/api/postcomment/" + studyId, comment_data,{
        headers: { Authorization: `${token}` },
      }) // back-end server http://13.125.151.93
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  };
  console.log(list.commentList);

  return (
    <>
      <Header />
      <div className="detail">
        <div className="detail_category">
          <span>cc</span>
        </div>

        <div className="detail_title">
          <p className="title">{list.studyTitle}</p>
        </div>

        <div className="detail_content">
          <p className="content">{list.studyContent}</p>
        </div>

        <div className="detail_comment">
          <h3>Comment List</h3>
          {/* 댓글이 등록될 div */}
          <div className="detail_comment_list">
            {/* {list.commentList.map((list, idx) => ( */}
              <Comment
                // key={idx}
                comment={list.commentContent}
                userNickname={list.userNickname}
                username={list.username}
                createdAt={list.createdAt}
              />
              {/* ))} */}
          </div>
        </div>
        <h3>Comment</h3>
        <form onSubmit={commentSubmitHandler} className="detail_comment_input">
          <input ref={comment_ref} type="text" className="Post_input" />
          <button type="submit" className="detail_comment_button">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default Detail;
