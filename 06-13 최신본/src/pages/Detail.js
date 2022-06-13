import React from "react";
import axios from "axios";
import Comment from "./Comment";


const Detail = () => {

  const comment_ref = React.useRef(null)

  const AddComment = () =>{
    axios.post('http://localhost:5001/data',{
      "commentContent" : comment_ref.current.value
    }) 
    console.log(comment_ref.current.value)
  }



  return (
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
        <Comment/>
        </div>
        <h3>Comment</h3>
        <form className="detail_comment_input">
          <input type='text' className="Post_input" ref={comment_ref}/>
          <button className="detail_comment_button" onClick={AddComment}>Add</button>
        </form>
      </div>
    </div>
  );
};







export default Detail;
