import {  Routes,Route } from "react-router-dom";
import Main from './pages/Main';
import Login from './pages/Login';
import Detail from './pages/Detail';
import Post from './pages/Post';
import Signup from './pages/Signup'





function App() {
  return (
    <div className="App">
      <Routes>
    <Route path = "/" element = {<Main />}/>
    <Route path = "/Login" element = {<Login/>}/>
    <Route path = "/Detail" element = {<Detail />}/>
    <Route path = "/Detail/:studyId" element = {<Detail />}/>
    <Route path = "/Post" element = {<Post />}/>
    <Route path = "/Signup" element = {<Signup />}/>
      </Routes>
    </div>
  );
}

export default App;
