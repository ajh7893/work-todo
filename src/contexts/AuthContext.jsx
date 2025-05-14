// src/contexts/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase";

// Context 생성
const AuthContext = createContext();

// Context 제공자 컴포넌트
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

// Context를 쉽게 쓰기 위한 훅
export function useAuth() {
  return useContext(AuthContext);
}
