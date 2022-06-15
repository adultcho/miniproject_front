
import React from "react";
import { useNavigate } from "react-router-dom";
import '../Style/Login.css'


const Header = () =>{
    let navigate = useNavigate();
    
    const localStoragetokenCheck = localStorage.getItem('refresh-token');       

    const Logout = ()=>{
        localStorage.removeItem('refresh-token')
        localStorage.removeItem('user-name')
        navigate('/')
        alert('로그아웃 되셨습니다')
    }

    return(
        
        <div className="nav">
            <h1 className="header_title"> 모이소 </h1>
            <div className="Header_btn">

            {!localStoragetokenCheck ?
            <div>
            <button onClick={()=>{navigate('/Login')}} >로그인</button>
            <button onClick={()=>{navigate('/Signup')}}>회원가입</button>
            </div> 

             :

            <div>
            <button onClick={Logout}>로그아웃</button>
            </div>}

            </div>
        </div>
    )
}


export default Header;