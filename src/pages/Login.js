import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const id_ref = React.useRef(null);
  const pw_ref = React.useRef(null);

  const LoginAxios = () => {
    axios
      .post("http://13.125.151.93/user/login", {
        username: id_ref.current.value,
        password: pw_ref.current.value,
      })
      .then((response) => {
        localStorage.setItem("refresh-token", response.headers.authorization);
        localStorage.setItem("user-name", id_ref.current.value);
        alert(response.data.message);
        navigate("/");
      })
      .catch((error) => {
        alert(error.response.data.message);
        id_ref.current.value = "";
        pw_ref.current.value = "";
      });
  };

<<<<<<< HEAD
  const kakao = async () => {
    await axios
      .get(
        "https://kauth.kakao.com/oauth/authorize?client_id=346b2f15b0bcf829529a506449139680&redirect_uri=http://13.125.151.93/user/kakao/callback&response_type=code"
      )
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  };
=======






>>>>>>> 30674621b9a9184d3d7bbf89771f01c648f290ff

  return (
    <div className="Login_container">
      <div className="Login_position">
        <h1 className="Login_h1"> Login </h1>
        <div className="Login_two_container">
          <div className="Login_id">
            <p>아이디 </p>
            <input
              type="text"
              className="Login_input"
              placeholder="아이디를 입력하세요"
              autoComplete="off"
              ref={id_ref}
            />
          </div>

          <div className="Login_pw">
            <p>비밀번호 </p>{" "}
            <input
              type="password"
              className="Login_input"
              placeholder="비밀번호를 입력하세요"
              autoComplete="off"
              ref={pw_ref}
            />
          </div>

          <div className="Login_button">
            <button onClick={LoginAxios}> 로그인</button>
            <div className="Login_Signup">
              <a href="/Signup">Are you Join ? </a>
<<<<<<< HEAD
              <a
                href="https://kauth.kakao.com/oauth/authorize?client_id=346b2f15b0bcf829529a506449139680&redirect_uri=http://13.125.151.93/user/kakao/callback&response_type=code"
                onClick={kakao}
              >
                카카오
              </a>
=======
>>>>>>> 30674621b9a9184d3d7bbf89771f01c648f290ff
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
