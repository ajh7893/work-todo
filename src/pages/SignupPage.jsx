// src/pages/SignupPage.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase"; // 우리가 아까 만든 firebase.js 가져오기

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // 회원가입 성공 후 이동하기 위해 사용

  const handleSignup = async (e) => {
    e.preventDefault();
    const auth = getAuth(app);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("회원가입 성공!");
      navigate("/login"); // 성공하면 로그인 페이지로 이동
    } catch (error) {
      console.error("회원가입 에러", error.message);
      alert("회원가입 실패: " + error.message);
    }
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="이메일 입력"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="비밀번호 입력 (6자 이상)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">회원가입</button>
      </form>
      <p>
        이미 계정이 있으신가요? <Link to="/login">로그인</Link>
      </p>
    </div>
  );
}

export default SignupPage;
