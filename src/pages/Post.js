//cancel 버튼 입력 및 add 버튼 입력 후 main component로 page이동하기 위한 useNavigate 사용,
//Post 입력 후 서버에 데이터 전성을 위한 axios.post 이용,
//address, title, content 입력값은 useRef hook을 이용해 from tag에 onSubit eventHandler 사용,
//category는 input radio 속성으로 onChange eventHandler 사용해 useState hook을 사용해 선택한 값을 axios로 전송

import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//conponents
import Header from "./Header";

//style
import "../Style/page.css";

const Post = () => {
  const navigate = useNavigate();

  //address, title, content
  const address_ref = React.useRef(null);
  const title_ref = React.useRef(null);
  const content_ref = React.useRef(null);

  //stack category
  const [category, setCategory] = React.useState(null);

  //cancel button
  const cancleHandler = () => {
    navigate("/");
  };

  //select stack category
  const radioChange = (e) => {
    if (e.target.checked) {
      setCategory(e.target.value);
    }
  };
  // React.useEffect(() => {
  //   axios
  //     .get("http://13.125.151.93/") // back-end server http://13.125.151.93
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((response) => {
  //       console.log(response);
  //     });
  // }, []);

  // add button click => input data {key:value}로 불러옴 =>  axios.post로 서버에 전송 => main page로 이동
  const postSubmitHandler = (e) => {
    e.preventDefault();
    const post_data = {
      category,
      studyAddress: address_ref.current.value,
      studyTitle: title_ref.current.value,
      studyContent: content_ref.current.value,
    };

    console.log(post_data);

    axios
      .post("http://13.125.151.93/api/poststudy", post_data) // back-end server http://13.125.151.93
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <form onSubmit={postSubmitHandler} className="post">
        <fieldset className="post_stack">
          <legend>Select Stack</legend>
          <input
            type="radio"
            onChange={radioChange}
            id="react"
            name="stack"
            value="react"
          />
          <label htmlFor="react">React</label>

          <input
            type="radio"
            onChange={radioChange}
            id="node-js"
            name="stack"
            value="node-js"
          />
          <label htmlFor="node-js">Node-js</label>

          <input
            type="radio"
            onChange={radioChange}
            id="spring"
            name="stack"
            value="spring"
          />
          <label htmlFor="spring">Spring</label>

          <input
            type="radio"
            onChange={radioChange}
            id="python"
            name="stack"
            value="python"
          />
          <label htmlFor="python">Python</label>
        </fieldset>

        <div className="post_user_address">
          <h3>User Address</h3>
          <input type="text" className="Post_input" ref={address_ref} />
        </div>
        <div className="post_title">
          <h1>Title</h1>
          <input type="text" className="Post_input" ref={title_ref} />
        </div>

        <div className="post_content">
          <h1>Content</h1>
          <textarea className="Post_input" ref={content_ref} />
        </div>
        <div className="post_btn">
          <button
            type="button"
            onClick={cancleHandler}
            className="post_btn_cancel"
          >
            Cancel
          </button>
          <button type="submit" className="post_btn_add">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default Post;
