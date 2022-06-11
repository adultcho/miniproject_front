import React from "react";

//style
import "../css/pages_css/Detail.css";

const Detail = () => {
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
          <p>comment1</p>
          <p>comment2</p>
          <p>comment3</p>
        </div>
        <h3>Comment</h3>
        <form className="detail_comment_input">
          <input type="text" />
          <button className="detail_comment_button">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Detail;
