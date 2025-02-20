// src/pages/Introduction.js
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

const Introduction = () => {
  return (
    <Container>
      <Heading>Giới Thiệu</Heading>
      <Text>
        Ứng dụng này được xây dựng để hỗ trợ giảng dạy tiếng Trung, cung cấp các
        chức năng như xem bài học, cập nhật lịch học và kiểm tra trực tuyến.
      </Text>
    </Container>
  );
};

export default Introduction;
