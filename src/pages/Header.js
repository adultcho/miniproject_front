
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () =>{
    let navigate = useNavigate();
    return(
        <>
        <div className="nav">
            <h1> 개발자 스터디</h1>
            <div className="Header_btn">
            <button onClick={()=>{navigate('./Signup')}}><strong>회원가입</strong></button>
            <button onClick={()=>{navigate('./Login')}}><strong>로그인</strong></button>
            </div>
        </div>
        </>
    )
}


export default Header;