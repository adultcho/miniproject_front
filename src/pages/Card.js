import React from "react";


const Card = (props) =>{
    console.log(props)
    return (
        <div className="Main_Card">
            <div className="Main_Card_title">{props.category}</div>
            <div className="Main_title">{props.title}</div>
            <div className="Main_imgBox">사진 넣을 곳</div>
        </div>
    )
}


export default Card;

