import React from "react";
import './css/Signup.css';
import { auth, db } from './firebase';
import {createUserWithEmailAndPassword } from 'firebase/auth';
import { collection,addDoc } from "firebase/firestore";



const Signup = () => {
    
    // input 태그 Ref로 요소 잡음   
    const id_ref = React.useRef();
    const pw_ref = React.useRef();
    const name_ref = React.useRef();

    
    //파이어 베이스에 Ref로 잡은 요소들 저장함
    const SignupFB = async() =>{
        const user = await createUserWithEmailAndPassword(auth,id_ref.current.value,pw_ref.current.value,name_ref.current.value)
        const user_doc = await addDoc(collection(db,'users'),{user_id: user.user.email, name : name_ref.current.value,})
        console.log(user_doc) 

        alert('축하합니다 로그인에 성공했습니다')
    }



// 화면 뷰 
    return(
        <>
        <h1 className="title"> Ins magazine</h1>
        <div className="container">
        <h2 className="subtitle"> 회원가입 신청서</h2>
        <div className="sec-box">
        <div>
            <p className="sign-p">아이디</p>
            <input className="Sign" ref={id_ref}/>
        </div>

        <div>
            <p className="sign-p">비밀번호</p>
            <input type="password" className="Sign" ref={pw_ref}/>
        </div>

        <div>
            <p className="sign-p">비밀번호 확인</p>
            <input type="password" className="Sign"/>
        </div>

        <div>
            <p className="sign-p">닉네임</p>
            <input className="Sign" ref={name_ref}/>
        </div>
        <button className="btn2" onClick={SignupFB}>회원가입 하기</button>
        </div>
        
        </div>
        </>
    )
}

export default Signup;