
import React from "react";
import { useNavigate } from "react-router-dom";



const Card = (props) => {
  const navigate = useNavigate();
  let detail_url = "/Detail/" + props.studyId;


  const cardClickHandler = () => {
    navigate(detail_url);
  };
  console.log(props);

  return (
    
      
      <div  onClick={cardClickHandler} className="Main_Card">
        <div className="Main_Card_title">{props.category}</div>
        <div className="Main_title">{props.title}</div>
        <div className="Main_imgBox"><img src={props.imageUrl} className="imgsrc"/></div>
      </div>
    
  );
};

export default Card;
