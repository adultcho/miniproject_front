import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
<<<<<<< HEAD
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
=======
import {ref,uploadBytes,getDownloadURL} from "firebase/storage"
import {storage} from '../firebase'






>>>>>>> 30674621b9a9184d3d7bbf89771f01c648f290ff

const Post = () => {
  const [imageSrc, setImageSrc] = React.useState("");
  const navigate = useNavigate();

  //address, title, content
  const address_ref = React.useRef(null);
  const title_ref = React.useRef(null);
  const content_ref = React.useRef(null);
  const fileInput = React.useRef(null);

  //stack category
  const [category, setCategory] = React.useState(null);

  //cancel button
  const cancelHandler = () => {
    navigate("/");
  };

  //select stack category
  const radioChange = (e) => {
    if (e.target.checked) {
      setCategory(e.target.value);
    }
  };

  const postSubmitHandler = async (e) => {
    e.preventDefault();
  };

  const imageFileFB = async () => {
    // fileInput.current.files 파일 접근할 때
    const upload_file = await uploadBytes(
      ref(storage, `images/${fileInput.current.files[0].name}`),
      fileInput.current.files[0]
    );
    console.log(upload_file); // ref 값을 가져옴

    const file_url = await getDownloadURL(upload_file.ref);
    console.log(file_url);
    fileInput.current = { url: file_url };

    const post_data = {
      category,
      studyAddress: address_ref.current.value,
      studyTitle: title_ref.current.value,
      studyContent: content_ref.current.value,
      imageUrl: fileInput.current?.url,
    };
    console.log(post_data);

    const token = localStorage.getItem("refresh-token");
    console.log(token);
    await axios
      .post("http://13.125.151.93/api/poststudy", post_data, {
        headers: { Authorization: `${token}` },
      }) // back-end server http://13.125.151.93
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/");
  };

  // 이미지 미리보기
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
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
          <div className="Post_container">
            <h1>Content</h1>
            <h1> image</h1>
          </div>

          <div className="third-container">
            <textarea className="Post_input" ref={content_ref} />
            <div className="imagebox">
                {imageSrc && <img src={imageSrc} alt="preview-img" />}
              </div>
            </div>
            <input
            type="text"
            htmlFor="input-file"
            placeholder="이미지를 선택하세요"
            
            style={{
              border: "2px solid pink",
              borderRadius: "10px",
            }}
            disabled
          />
                <input
                  type="file"
                  id="input-file"
                  ref={fileInput}
                  onChange={(e) => {
                    encodeFileToBase64(e.target.files[0]);
                  }}
                />
          </div>
        
        <div className="post_btn">
          <button
            type="button"
            onClick={cancelHandler}
            className="post_btn_cancel"
          >
            Cancel
          </button>
          <button type="submit" className="post_btn_add" onClick={imageFileFB}>
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default Post;
