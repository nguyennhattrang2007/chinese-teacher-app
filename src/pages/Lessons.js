// src/pages/Lessons.js
import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

const Container = styled.div`
  padding: 3rem;
  text-align: center;
`;

const Heading = styled.h1`
  color: #4a90e2;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1.125rem;
  color: #555;
`;

const Lessons = () => {
  const { user } = useContext(AuthContext);
  const isTeacher = user && user.email === process.env.REACT_APP_TEACHER_EMAIL;

  return (
    <Container>
      <Heading>Bài Học</Heading>
      {isTeacher ? (
        <Text>Bạn có thể thêm và chỉnh sửa bài học tại đây.</Text>
      ) : (
        <Text>Bạn có thể xem bài học được cập nhật bởi giáo viên.</Text>
      )}
    </Container>
  );
};

export default Lessons;
