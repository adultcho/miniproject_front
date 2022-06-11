import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () =>{
    // 리액트 훅
    let navigate = useNavigate();

    
    // Ref로 요소 잡아준 것들
    const id_ref = React.useRef(null)
    const pw_ref = React.useRef(null)
    const pwcheck_ref = React.useRef(null)
    const nick_ref = React.useRef(null)
    

    // 회원가입 Axios  데이터 POST 성공
     const SignupAxios = () =>{
          axios.post('http://13.125.151.93/user/signup',{
            "username": id_ref.current.value,
            "password": pw_ref.current.value,
            "password_confirm": pwcheck_ref.current.value,
            "nickname": nick_ref.current.value
          }).then((response)=>{
            alert(response.data)    // 회원가입 완료  
            navigate('/Login')
          }).catch((response)=>{
            alert(response.response.data.errorMessage)  // 해당 오류 메세지 생성
          })
    }




    return(
        <div className="Signup_container">
            <h1 className="Signup_h1"> 회원가입</h1>

            <div className="Signup_two_container">
                <div><p>아이디</p>  <input type="text" ref={id_ref}/></div>
                
                <div><p>비밀번호</p>  <input type="password" ref={pw_ref} /></div>

                <div><p>비밀번호 확인</p>  <input type="password" ref={pwcheck_ref}/></div>

                <div><p>닉네임</p><input type="text"ref={nick_ref}/></div>
            </div>

              <div className="Signup_btn">
                  <button className="Signup_back"> 뒤로가기 </button>
                  <button className="Signup_Signup" onClick={SignupAxios}> 회원가입 </button>
             </div>

        </div>
    )

}

export default Signup;