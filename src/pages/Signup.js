import React from "react";


const Signup = () =>{

    return(
        <div className="Signup_container">
            <h1 className="Signup_h1"> 회원가입</h1>

            <div className="Signup_two_container">
                <div><p>아이디</p>  <input type="text"/></div>
                
                <div><p>비밀번호</p>  <input type="text"/></div>

                <div><p>비밀번호 확인</p>  <input type="text"/></div>

                <div><p>닉네임</p>  <input type="text"/></div>
            </div>

              <div className="Signup_btn">
                  <button className="Signup_back"> 뒤로가기 </button>
                  <button className="Signup_Signup"> 회원가입 </button>
             </div>

        </div>
    )

}

export default Signup;