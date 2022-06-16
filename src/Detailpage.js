import React from "react";
import './css/Detailpage.css'
import {AiTwotoneHeart} from "react-icons/ai";

const Detailpage = () =>{
    return(
            <div className="D-container">
                <h1>닉네임 님의 게시글<span className="D-heart-icon"></span></h1>
                <div className="D-Picture">
                사진
                </div>
                <div className="D-comment">
                    comment  
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

    )
}

export default Detailpage;