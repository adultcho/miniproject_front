import React from "react";

const Header = () =>{
    return(
        <>
        <div className="nav">
            <h1> 개발자 스터디</h1>
            <div className="Header_btn">
            <button><strong>회원가입</strong></button>
            <button><strong>로그인</strong></button>
            </div>
        </div>
        </>
    )
}

export default Header;