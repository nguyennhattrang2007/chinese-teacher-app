// src/pages/Login.js
import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f2f5;
`;

const Logo = styled.h1`
  font-size: 2.8rem;
  color: #4a90e2;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const LoginCard = styled.div`
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: #333;
`;

const LoginButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #4a90e2;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #357ab8;
  }
`;

const Login = () => {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/" />;
  }

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Đăng nhập thành công:", result.user);
      })
      .catch((error) => {
        if (error.code === "auth/popup-closed-by-user") {
          console.warn("Popup đăng nhập đã bị đóng bởi người dùng.");
          return;
        }
        console.error("Lỗi đăng nhập:", error);
        alert("Đăng nhập thất bại!");
      });
  };

  return (
    <LoginContainer>
      <Logo>Tiếng Trung Onni</Logo>
      <LoginCard>
        <Title>Đăng nhập vào Ứng dụng</Title>
        <LoginButton onClick={handleLogin}>Đăng nhập với Google</LoginButton>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
