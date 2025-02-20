// src/components/SignIn.js
import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #fff;
  color: #4a90e2;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
`;

const SignIn = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Đăng nhập thành công:", result.user);
        // Cập nhật UI hoặc chuyển hướng sau đăng nhập thành công
      })
      .catch((error) => {
        // Nếu người dùng đóng popup, ta chỉ ghi log mà không thông báo lỗi
        if (error.code === "auth/popup-closed-by-user") {
          console.warn("Popup đăng nhập đã bị đóng bởi người dùng.");
          return;
        }
        console.error("Lỗi đăng nhập:", error);
        alert("Đăng nhập thất bại!");
      });
  };

  return <Button onClick={signInWithGoogle}>Đăng nhập với Google</Button>;
};

export default SignIn;
