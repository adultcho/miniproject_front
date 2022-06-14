import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Login.css";
import Header from "./Header";
import Card from "./Card";
import axios from "axios";

const Main = () => {
  let navigate = useNavigate();




const Main = () => {
  const [state, setState] = React.useState([]);
  let navigate = useNavigate();
  React.useEffect(() => {
    axios
      .get("http://13.125.151.93/api/poststudy") // back-end server http://13.125.151.93/api/poststudy
      .then((response) => {
        setState(response.data);
      })
      .catch((response) => {
        console.log(response);
      })
  }, []);
  console.log(state)
  return (
    <>
      <Header />
      <div className="Main_catagoryBar">
        <div className="Main_btn">
          <button>전체</button>
          <button>리액트</button>
          <button>노드</button>
          <button>스프링</button>
          <button>파이썬</button>
          <button
            onClick={() => {
              navigate("/Post");
            }}
          >
            게시글 작성
          </button>
        </div>

        <div className="Card_container">

          {state.map((state, id)=>(
            <Card
            key={id}
            category={state.category}
            address ={state.studyAddress}
            title = {state.studyTitle}
            content={state.studyContent}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
