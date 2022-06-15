import React from "react";
import Header from "./Header";
import axios from "axios";
import Comment from "./Comment";
import { useParams } from "react-router-dom";

const Detail = () => {
  let { studyId } = useParams();

  console.log(studyId);

  const comment_ref = React.useRef(null);

  const [list, setList] = React.useState([]);
  
  // let test; React.useEffect(()=>{ try{ test = await axios.get( URL ) console.log( test ); } catch(e){ console.log( e ); } }, [])

  // let test;
  // React.useEffect(async () => {
  //   test = await axios
  //     .get("http://13.125.151.93/api/getstudy/" + studyId)
  //     .then((res) => {
  //       setList(res.data)
  //     })
  // }, []);
  // console.log(test);
  

  React.useEffect(() => {
    axios
      .get("http://13.125.151.93/api/getstudy/" + studyId) // back-end server http://13.125.151.93/api/poststudy
      .then((response) => {
        setList(response.data);

        console.log(response);
        console.log(response.data)
        response.data.commentList.reverse();

      })
      .catch((response) => {
        console.log(response);
      });
  }, [studyId]);

  const commentSubmitHandler = async (e) => {
    e.preventDefault();

    // window.location.reload()

    const comment_data = {
      commentContent: comment_ref.current.value,
    };
    console.log(comment_data);
    const token = localStorage.getItem("refresh-token");

    await axios
      .post("http://13.125.151.93/api/postcomment/" + studyId, comment_data, {
        headers: { Authorization: `${token}` },
      }) // back-end server http://13.125.151.93

      .then((response) => {
        console.log(response);
        window.location.reload()
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
          <span>category</span>
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
            {list.commentList && list.commentList.map((list, idx) => (
                
              <Comment
                key={idx}
                commentId = {list.commentId}
                comment={list.commentContent}
                userNickname={list.userNickname}
                username={list.username}
            
              />
              
                ))} 
            {/* <Comment 
            
            comment={list.commentContent}
            userNickname={list.userNickname}
            username={list.username}/> */}
          </div>
        </div>

        <div className="position">
          <h3>Comment</h3>
          <form
            onSubmit={commentSubmitHandler}
            className="detail_comment_input"
          >
            <input ref={comment_ref} type="text" className="Post_input" />
            <button type="submit" className="detail_comment_button">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Detail;
