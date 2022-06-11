import React from "react";
import Header from './Header';
import '../Style/page.css'

const Post = () => {

  return (
    <>
    <Header/>
    <form className="post">
        <fieldset className="post_stack">
            <legend>Select Stack</legend>
          <input type="radio" id="react" name="stack" value="react" />
          <label for="react">React</label>

          <input type="radio" id="node-js" name="stack" value="node-js"/>
          <label for="node-js">Node-js</label>

          <input type="radio" id="spring" name="stack" value="spring"/>
          <label for="spring">Spring</label>

          <input type="radio" id="python" name="stack" value="python"/>
          <label for="python">Python</label>
        </fieldset>



        <div className="post_user_address">
          <h3>User Address</h3>
          <input type="text" className="Post_input"/>
        </div>
        <div className="post_title">
          <h1>Title</h1>
          <input type="text" className="Post_input"/>
        </div>

        <div className="post_content">
          <h1>Content</h1>
          <textarea rows="5" cols="33" className="Post_input"/>
        </div>
        <div className="post_btn">
        <button className="post_btn_cancel">Cancel</button>
        <button className="post_btn_add">Add</button>
        </div>
    </form>
    </>
  );
};

export default Post;
