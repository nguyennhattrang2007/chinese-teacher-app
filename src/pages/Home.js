// src/pages/Home.js
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 3rem;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #4a90e2;
  margin-bottom: 1rem;
`;

const SubText = styled.p`
  font-size: 1.125rem;
  color: #666;
`;

const Home = () => {
  return (
    <Container>
      <Heading>Chào mừng đến với Tiếng Trung Onni</Heading>
      <SubText>Ứng dụng Dạy Tiếng Trung</SubText>
      <SubText>
        Hệ thống hỗ trợ giáo viên và học sinh trong quá trình học tập.
      </SubText>
    </Container>
  );
};

export default Home;
