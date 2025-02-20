// src/pages/Schedule.js
import React from "react";
import styled from "styled-components";

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

const Schedule = () => {
  return (
    <Container>
      <Heading>Lịch Học</Heading>
      <Text>Thông tin lịch học và thời khóa biểu sẽ được cập nhật ở đây.</Text>
    </Container>
  );
};

export default Schedule;
