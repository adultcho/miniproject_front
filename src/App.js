import Addpost from './Addpost';
import './css/App.css';
import {onAuthStateChanged} from 'firebase/auth'
import React from 'react';
import { Switch, Route, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import Login from './Login';
import Signup from './Signup';
import Main from './Main';
import Detailpage from './Detailpage';



function App() {
  const history = useHistory();

const [is_login,setIsLogin] = React.useState(false);

console.log(auth.currentUser) // userImpl 콘솔 정보창이 나오면 로그인된 상태확인


// 로그인 체크 함수 (user를 가지고와서 만약에 유저가 있으면 T 없으면 F)
const loginCheck = async(user)=>{
  if(user){
    setIsLogin(true)
    history.push('./Main')
  } else{
    setIsLogin(false)
    history.push('/')

  }  
}

React.useEffect(()=>{
  onAuthStateChanged(auth, loginCheck)
})

console.log(is_login)


  return (
    <div className="App">
      <Switch>
      <Route path="/" exact><Login/></Route> 
      <Route path="/Signup"  component={Signup}></Route>
      <Route path="/Main"  component={Main}></Route>
      <Route path="/Addpost"  component={Addpost}></Route>
      <Route path="/Detailpage"  component={Detailpage}></Route>
      </Switch>

    </div>
  );
}


export default App;
