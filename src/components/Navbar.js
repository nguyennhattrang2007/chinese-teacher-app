// src/components/Navbar.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import SignIn from "./SignIn";

const Nav = styled.nav`
  background-color: #4a90e2;
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const NavLinks = styled.div`
  a {
    color: #fff;
    margin-right: 1.5rem;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #dfe6e9;
    }
  }
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LogoutButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #fff;
  color: #4a90e2;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #dfe6e9;
  }
`;

const SquirrelImage = styled.img`
  width: 60px;
  height: 60px;
`;

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Đăng xuất thành công");
      })
      .catch((error) => {
        console.error("Lỗi đăng xuất:", error);
      });
  };

  return (
    <Nav>
      <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
        <Logo>
          <Link to="/">Tiếng Trung Onni</Link>
        </Logo>
        <SquirrelImage src="/img/soc.png" alt="Onni Mascot" />
      </div>
      <NavLinks>
        <Link to="/introduction">Giới Thiệu</Link>
        <Link to="/register">Đăng ký</Link>
        {/* <Link to="/lessons">Bài Học</Link>
        <Link to="/schedule">Lộ trình học</Link>
        <Link to="/exam-homework">Kiểm Tra</Link> */}
      </NavLinks>
      <UserSection>
        {/* {user ? (
          <>
            <span style={{ color: "#fff" }}>Xin chào, {user.displayName}</span>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </>
        ) : (
          <SignIn />
        )} */}
        <span style={{ color: "#fff" }}>Xin chào! Cùng đăng ký nhé!</span>
      </UserSection>
    </Nav>
  );
};

export default Navbar;
