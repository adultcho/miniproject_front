import React from "react";
import './css/Card.css'
import { AiFillDelete,AiTwotoneHeart,AiOutlinePlusCircle} from "react-icons/ai";
import { useHistory } from "react-router-dom";


const Leftcard = () =>{
    const history = useHistory();
    return (
        <div>
            <div className="Card">
            <div className="nav-Card">
            <p>닉네임</p>
                <span className="nav-Sec">
                    <span>2022-06-05</span>
                    <p className="Delete-icon"><AiFillDelete/></p>
                    <p className="Detail-icon" onClick={()=>{history.push("/Detailpage");}} ><AiOutlinePlusCircle/></p>
                </span>
            </div>
            <div className="Left">
            <div className="Left-Picture">
                사진
            </div>
            <div className="Left-comment">
                 comment
            </div>
            </div>
            <div className="footer">
            <span className="like">
                <p className="heart-icon"> <AiTwotoneHeart/></p>
                <p>좋아요: 1</p>
                
            </span>
            <span className="footer-2">
                <input className="card-comment" type="text" placeholder="댓글 달기"/>
                <button>등록</button>
            </span>
            </div>
            </div>
        </div>
    )
}

export default Leftcard;