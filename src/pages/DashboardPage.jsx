// src/pages/DashboardPage.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function DashboardPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      // 아직 user 정보가 null이면 로그인 안한 거니까 로그인 페이지로 보낸다
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div>
      <h2>대시보드</h2>
      <p>여기에 업무일지랑 투두리스트를 만들 거야!</p>
    </div>
  );
}

export default DashboardPage;
