// src/pages/Introduction.js
import React from "react";
import styled from "styled-components";

/* Container toàn màn hình với background */
const Container = styled.div`
  position: relative;
  height: calc(100vh - 170px);
  background: url("/img/background.jpg") no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

/* Tiêu đề chính */
const Title = styled.h1`
  font-size: 2rem;
  color: #4a90e2;
  margin-top: 3%;
  text-shadow: 2px 2px 5px rgba(26, 255, 255, 0.5);
`;

const SubTitle = styled.h1`
  font-size: 4rem;
  color: #4a90e2;
  text-shadow: 2px 2px 5px rgba(26, 255, 255, 0.5);
`;

/* Ảnh con sóc đặt ở góc phải */
const SquirrelImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 15%;
  width: 250px;
  height: auto;
`;

/* Hộp thoại (speech bubble) */
const SpeechBubble = styled.div`
  position: absolute;
  bottom: 15%; /* chỉnh toạ độ dọc cho phù hợp */
  right: 35%; /* chỉnh toạ độ ngang cho phù hợp */
  width: 400px;
  transform: rotate(-10deg); /* nghiêng toàn bộ khung một chút */

  background: #fff;
  border: 2px solid #aaa;
  border-radius: 20px;
  padding: 1rem;
  text-align: center;
  box-shadow: 2px 2px 5px rgba(26, 255, 255, 0.5);

  /* Tạo đuôi cho hộp thoại */
  &:after {
    content: "";
    position: absolute;
    bottom: -78px; /* cho đuôi nằm dưới khung */
    right: 100px; /* chỉnh vị trí đuôi */
    width: 0;
    height: 0;
    border: 40px solid transparent;
    border-top-color: #fff; /* màu đuôi trùng với màu nền khung */
  }
`;

/* Nội dung text bên trong hộp thoại */
const SpeechText = styled.p`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
  /* Nếu muốn text không bị nghiêng theo khung, xoay ngược lại: */
  /* transform: rotate(5deg); */
`;

const Home = () => {
  return (
    <Container>
      <Title>Chào mừng bạn đến với</Title>
      <SubTitle>Tiếng Trung Onni</SubTitle>

      {/* Ảnh con sóc */}
      <SquirrelImage src="/img/soc.png" alt="Onni Mascot" />

      {/* Hộp thoại của con sóc */}
      <SpeechBubble>
        <SpeechText>
          Nếu các bạn đang gặp khó khăn khi học Tiếng Trung không biết bắt đầu
          từ đâu?, học như thế nào? Hãy để Onni giúp bạn nhé!
        </SpeechText>
      </SpeechBubble>
    </Container>
  );
};

export default Home;
