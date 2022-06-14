
import React from "react";
import { useNavigate } from "react-router-dom";


const Card = (props) => {
  const navigate = useNavigate();
  let detail_url = "/Detail/" + props.studyId;

  const cardClickHandler = () => {
    navigate(detail_url);
  };
  console.log(props);
  console.log(props.studyId);

  return (
    <div onClick={cardClickHandler} className="Card_container">
      
      <div className="Main_Card">
        <div className="Main_Card_title">{props.category}</div>
        <div className="Main_title">{props.title}</div>
        <div className="Main_imgBox">사진 넣을 곳</div>
      </div>
    </div>
  );
};

export default Card;
