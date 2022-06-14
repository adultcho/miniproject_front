import React from "react";
import Header from "./Header";
import axios from "axios";
import Comment from "./Comment"



const Detail = () => {

  const [comment, setComment] = React.useState([]);
  const comment_ref = React.useRef(null);
  const [text,setText] = React.useState([]);

  React.useEffect(()=>{
    axios.get("http://localhost:5001/sleep_times")
    .then(res =>{
      setText(res.data);
      let data = res.data;
      data.reverse()
    });
  },[])


  React.useEffect(() => {
    axios
      .get("http://localhost:5001/postcomment") // back-end server http://13.125.151.93/api/poststudy
      .then((response) => {
        setComment(response.data);
        console.log(response.data);
        response.data.reverse()
      })
      .catch((response) => {
        console.log(response);
      });
  }, []);

  const commentSubmitHandler = (e) => {
    e.preventDefault();
    window.location.reload()


    const comment_data = {
      commentContent: comment_ref.current.value,
    };
    console.log(comment_data);

    axios
      .post("http://localhost:5001/sleep_times", comment_data) // back-end server http://13.125.151.93
      .then((response) => {
        console.log(response.data);
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
          {/* 댓글이 등록될 div */}
          <div className="detail_comment_list">
            {comment.map((comment, idx) => (
              <Comment key={idx}comment={comment.commentContent} />
            ))}
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
