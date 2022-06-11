import React from "react";
import { Routes, Route } from "react-router-dom";

//components
import Detail from "./pages/Detail";
import Post from "./pages/Post";
import Header from "./components/Header";

//style
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/detail" exact element={<Detail />} />
        <Route path="/post" exact element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
