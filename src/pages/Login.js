import React from "react"
import { useHistory } from "react-router-dom";
import './Style/Login.css'


const Login = () =>{
    const history = useHistory();




    return (
        <div className="Login_container">
            <div className="Login_position">
            <h1 className="Login_h1"> Login </h1>
            <div className="Login_two_container">
            <div className="Login_id">
            <p>아이디 </p> <input type = "text" className="Login_input" placeholder="아이디를 입력하세요" autoComplete="off"/>
            </div>

            <div className="Login_pw">
            <p>비번 </p> <input type = "password"className="Login_input"placeholder="비밀번호를 입력하세요" autoComplete="off"/>
            </div>

            <div className="Login_button">
            <button onClick={()=>{history.push('/Main')}}> 로그인</button>
            <div className="Login_Signup">
            <a href="/Signup">Are you Join ? </a>
            </div>

            </div>
        
            </div>


            </div>

        </div>

    )
}

export default Login;