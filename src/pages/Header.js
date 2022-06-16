import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();

  const localStoragetokenCheck = localStorage.getItem("refresh-token");

  const Logout = () => {
    localStorage.removeItem("refresh-token");
    localStorage.removeItem("user-name");
    navigate("/");
    alert("로그아웃 되셨습니다");
  };

  const moveToHome = () => {
    navigate("/");
  };

  return (
    <div className="nav">
      <h1 className="header_title" onClick={moveToHome}>
        {" "}
        모이소<span>개발자 스터디 모집</span>{" "}
      </h1>
      <div className="Header_btn">
        {!localStoragetokenCheck ? (
          <div>
            <button
              onClick={() => {
                navigate("/Login");
              }}
            >
              로그인
            </button>
            <button
              onClick={() => {
                navigate("/Signup");
              }}
            >
              회원가입
            </button>
          </div>
        ) : (
          <div>
            <button onClick={Logout}>로그아웃</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
