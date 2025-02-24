// src/pages/About.js
import React from "react";
import styled from "styled-components";

// Container toàn trang với background mờ
const Container = styled.div`
  position: relative;
  height: calc(100vh - 170px);
  background: url("/img/background.jpg") no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

// Overlay mờ để text dễ đọc trên nền
const Overlay = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  max-width: 1000px;
  border-radius: 8px;
  padding: 2rem;
  text-align: left;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
  color: #4a90e2;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.4;
  font-size: 1.2rem;
`;

const BottomTitle = styled.h2`
  font-size: 1.25rem;
  font-style: italic;
  margin-top: 1.5rem;
  margin-bottom: 0.25rem;
  text-align: center;
`;

const About = () => {
  return (
    <Container>
      <Overlay>
        <Title>Giới thiệu</Title>

        <SectionTitle>🎉 Giảng viên đồng hành cùng Onni</SectionTitle>
        <List>
          <ListItem>
            <strong>👩‍🏫 1. Nguyễn Nhật Trang - 2007</strong>
            <br />
            - Đang học tập tại Trường THPT Thái Phúc.
            <br />
            - Đã có chứng chỉ HSK4 và HSKK TC.
            <br />
            - “Sĩ tử” cuộc thi “Thanh âm Hán Ngữ 2024” do Hanzii Chinese
            Dictionary tổ chức và cấp giấy chứng nhận.
            <br />
            - Top 30 cuộc thi “Thanh âm cho em 2024” do Ngoại Ngữ Từ Gốc tổ chức
            và cấp giấy chứng nhận.
            <br />- Giải sáng tạo “Lời yêu ngọt ngào” do Migii HSK tổ chức.
          </ListItem>

          <ListItem>
            <strong>👩‍🏫 2. Đặng Phương Uyên - 2007</strong>
            <br />
            - Đang học tập tại Trường THPT Nam Đông Quan.
            <br />- Đã có chứng chỉ HSK4 và HSKK TC.
          </ListItem>
        </List>

        <SectionTitle>🎉 Cộng tác viên cùng Onni</SectionTitle>
        <List>
          <ListItem>
            <strong>👩‍🏫 1. 黎和飞 - Lý Hợp Phi (Andy) - 1993</strong>
            <br />
            - Sinh ra tại Phòng Thành Cảng, Quảng Tây, Trung Quốc.
            <br />- Đang sinh sống và làm việc tại Lai Châu, Việt Nam.
          </ListItem>

          <ListItem>
            <strong>👩‍🏫 2. 王子豪 - Vương Tử Hào - 2006</strong>
            <br />- Sinh sống và làm việc tại Trịnh Châu, Hà Nam, Trung Quốc
          </ListItem>
        </List>
        <BottomTitle>
          ~~~ “Học thêm 1 ngôn ngữ, sống thêm 1 cuộc đời!” ~~~
        </BottomTitle>
      </Overlay>
    </Container>
  );
};

export default About;
