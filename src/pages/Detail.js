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


  const commentSubmitHandler = (e) => {
    e.preventDefault();
    window.location.reload()


    // setComment((prevComments) => {
    //   return [comment_ref.current.value, ...prevComments];
    // });

    const comment_data = {
      commentContent: comment_ref.current.value,
    };

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

          <Comment text={text}/>


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
