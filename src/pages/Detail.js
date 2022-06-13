import React from "react";
import Header from "./Header";
import axios from "axios";

const Detail = () => {
  const [comment, setComment] = React.useState([]);
  const comment_ref = React.useRef(null);

  const commentSubmitHandler = (e) => {
    e.preventDefault();

    setComment((prevComments) => {
      return [comment_ref.current.value, ...prevComments];
    });

    const comment_data = {
      commentContent: comment_ref.current.value,
    };
    console.log(comment_data);

    axios
      .post("http://localhost:5001/postcomment", comment_data) // back-end server http://13.125.151.93
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  };

  return (
    <>
      <Header />
      <div className="detail">
        <div className="detail_category">
          <span>React</span>
        </div>

        <div className="detail_title">
          <p className="title">Title</p>
        </div>

        <div className="detail_content">
          <p className="content">Content</p>
        </div>

        <div className="detail_comment">
          <h3>Comment List</h3>
          <div className="detail_comment_list">
            {comment.map((comment, idx) => (
              <>
                <div className="detail_comment_list_information">
                  <span>userNickname</span>
                  <span>userName</span>
                  <span>time</span>
                </div>
                <p key={idx}>
                  {comment}
                  <div className="detail_comment_list_modify">
                    <button>수정</button>
                    <button>삭제</button>
                  </div>
                </p>
              </>
            ))}
          </div>
          <h3>Comment</h3>
          <form
            onSubmit={commentSubmitHandler}
            className="detail_comment_input"
          >
            <input ref={comment_ref} type="text" className="Post_input" />
            <button className="detail_comment_button">Add</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Detail;
