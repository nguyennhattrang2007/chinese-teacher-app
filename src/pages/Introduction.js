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
  max-height: calc(100vh - 200px);
  overflow-y: scroll;
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
  padding-left: 1.5rem;
  margin-bottom: 1rem;
`;

const ListItem = styled.div`
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

        <SectionTitle>
          🎉 Lớp tiếng Trung Online dành cho người mới bắt đầu.
        </SectionTitle>
        <strong style={{ fontSize: "20px" }}>
          Cam kết đầu ra HSK3+, không đỗ ={">"} học lại miễn phí.
        </strong>
        <List>
          <ListItem>
            - Bạn yêu thích tiếng Trung nhưng không biết bắt đầu từ đâu?
            <br />
            - Lịch trình bận rộn khiến bạn khó theo học trực tiếp?
            <br />
            ---------------------
            <br />
            Tham gia ngay{" "}
            <span style={{ fontWeight: 700 }}>LỚP TIẾNG TRUNG ONLINE</span> cùng
            giảng viên tại <span style={{ fontWeight: 700 }}>Onni</span>.
            <br />
            🔥 Lớp học online buổi chiều & buổi tối, thời gian khoảng từ 14h00
            đến 16h00 hoặc từ 19h00 đến 21h00.
            <br />
            🔥 Khai giảng dự kiến: 05/07.
            <br />
            🔥 Tiện lợi, linh hoạt thời gian cho các bạn học sinh buổi sáng đi
            học.
            <br />
            📝 Ngoài ra, Onni còn có lớp học cho các bạn nhỏ từ 8 đến 14 tuổi
            muốn tiếp xúc, làm quen với tiếng Trung.
            <br />
            ---------------------
            <br />
          </ListItem>
        </List>

        <SectionTitle>🎉 Nội dung khóa học</SectionTitle>
        <List>
          <ListItem>
            📚 Phát âm chuẩn ngay từ đầu, đào tạo bài bản Nghe, nói, đọc, viết.
            <br />
            📚 Ghi nhớ các nét chữ Hán, bộ thủ Tiếng Trung, nắm vững 700800 từ
            vựng, tự tin giao tiếp cùng người bản địa những cuộc hội thoại hàng
            ngày.
            <br />
            📚 Giao lưu trực tiếp với người Trung Quốc giúp học viên tăng phản
            xạ giao tiếp.
            <br />
            👩‍🏫 Học Online, tương tác trực tiếp cùng giảng viên, giúp kịp thời
            chỉnh sửa các lỗi thường gặp.
            <br />
            🌟 Đăng ký ngay hôm nay để cùng Onni xây dựng một nền tảng Tiếng
            Trung vững chắc, dễ dàng đạt HSK3 chỉ sau một khóa học bạn nhé!
          </ListItem>
        </List>

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
