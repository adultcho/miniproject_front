
import React from "react";
import { useNavigate } from "react-router-dom";
import '../Style/Login.css';
import Header from './Header';
import Card from './Card';


const Main = () =>{
    let navigate = useNavigate();

    // axios
    //   .get("http://localhost:5001/poststudy") // back-end server http://13.125.151.93
    //   .then((response) => {
    //     console.log(response);
    //     navigate("/");
    //   })
    //   .catch((response) => {
    //     console.log(response);
    //   });
    return( 
        <>
        <Header/>
        <div className="Main_catagoryBar">
            <div className="Main_btn">
                <button>전체</button>
                <button>리액트</button>
                <button>노드</button>
                <button>스프링</button>
                <button>파이썬</button>
                <button onClick={()=>{navigate('./Post')}}>게시글 작성</button>
            </div>

        <div className="Card_container">
            <Card/>
        </div>
        </div>
        </>



        






        











    )
}


export default Main;