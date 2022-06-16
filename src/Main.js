import React from "react";
import './css/main.css';
import { FiLogOut,FiFilePlus } from "react-icons/fi";
import Card from './Card';
import { useHistory } from "react-router-dom";
import Leftcard from "./Leftcard";
import Rightcard from "./Rightcard";
import {loadCardFB} from "./redux/modules/Reducer"
import { useDispatch} from "react-redux"
import { signOut } from "firebase/auth";
import { auth } from "./firebase";


const Main = () =>{
    const history = useHistory();
    const dispatch = useDispatch();

    React.useEffect(()=>{
        dispatch(loadCardFB());
      })



    return(
        <>
        <div className="Mcontainer">
            <div className="nav">
            <h1>Ins magazine</h1>
            <span className="icon-first"onClick={()=>{history.push("/Addpost");}}><FiFilePlus/></span>
            <span className="icon-second" onClick={()=>{signOut(auth)}}><FiLogOut/></span>
            </div>
            <Card/>
            <Leftcard/>
            <Rightcard/>
        </div>
        </>
    )
}

export default Main;