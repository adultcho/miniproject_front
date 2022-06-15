import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Login.css";
import Header from "./Header";
import Card from "./Card";
import axios from "axios";
import { RiAddCircleFill } from "react-icons/ri";

const Main = () => {
  const [state, setState] = React.useState([]);
  let navigate = useNavigate();

  React.useEffect(() => {
    axios
      .get("http://13.125.151.93/") // back-end server http://13.125.151.93/api/poststudy
      .then((response) => {
        setState(response.data);
        console.log(response.data);
      })
      .catch((response) => {
        console.log(response);
      });

  }, []);

  const categoryAll = () => {
    axios
      .get("http://13.125.151.93/") // back-end server http://13.125.151.93/api/poststudy
      .then((response) => {
        setState(response.data);
        console.log(response.data);

      })
      .catch((response) => {
        console.log(response);
      });
  };

  



  const categoryReact = () => {
    axios
      .post(
        "http://13.125.151.93/",
        { category: "react" },
        {
          headers: { Authorization: localStorage.getItem("refresh-token") },
        }
      ) // back-end server http://13.125.151.93
      .then((response) => {
        setState(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const categoryNode = () => {
    axios
      .post(
        "http://13.125.151.93/",
        { category: "node-js" },
        {
          headers: { Authorization: localStorage.getItem("refresh-token") },
        }
      ) // back-end server http://13.125.151.93
      .then((response) => {
        setState(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const categorySpring = () => {
    axios
      .post(
        "http://13.125.151.93/",
        { category: "spring" },
        {
          headers: { Authorization: localStorage.getItem("refresh-token") },
        }
      ) // back-end server http://13.125.151.93
      .then((response) => {
        setState(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const categoryPython = () => {
    axios
      .post(
        "http://13.125.151.93/",
        { category: "python" },
        {
          headers: { Authorization: localStorage.getItem("refresh-token") },
        }
      ) // back-end server http://13.125.151.93
      .then((response) => {
        setState(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header state={state} />
      <div className="Main">
        <div className="Main_btn">
      
          <button id="categoryBtnAll" className="Main_category_btn" onClick={categoryAll}>
            All
          </button>
          <button onClick={categoryReact} id="categoryBtnReact" className="Main_category_btn" name="react">
            React
          </button>
          <button onClick={categoryNode} id="categoryBtnNode" className="Main_category_btn" name="node-js">
            Node-js
          </button>
          <button onClick={categorySpring} id="categoryBtnSpring" className="Main_category_btn" name="spring">
            Spring
          </button>
          <button onClick={categoryPython} id="categoryBtnPython" className="Main_category_btn" name="python">
            Python
          </button>
        </div>
          <RiAddCircleFill
            className="Main_post_btn"
            type="button"
            onClick={() => {
              navigate("/Post");
            }}
          >
            게시글 작성
            </RiAddCircleFill>
          
          
            <div className="Card_container">
        {state.map((state, id) => (
          <Card
            key={id}
            studyId={state.studyId}
            category={state.category}
            address={state.studyAddress}
            title={state.studyTitle}
            content={state.studyContent}
            imageUrl={state.imageUrl}
          />
        ))}
        </div>
      
      </div>
      
    </>
  );
};

export default Main;
