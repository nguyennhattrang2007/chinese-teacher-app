// src/components/Footer.js
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: linear-gradient(to right, #1e5799 0%, #7e7ef6 0%, #5fd9e4 100%);
  padding: 0.5rem 20rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  /* Sử dụng CSS Grid để chia thành 2 hàng và 3 cột */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 1rem;
  align-items: center;

  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

const FooterItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
`;

const IconImage = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
  background: #fff;
  border-radius: 50%;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterItem>
        <div>
          <IconImage src="/img/facebook.jpg" alt="icon1" />
        </div>
        <span>Trung-Anh Onni</span>
      </FooterItem>
      <FooterItem>
        <IconImage src="/img/tiktok.jpg" alt="icon2" />
        <span>onni.katie</span>
      </FooterItem>
      <FooterItem>
        <IconImage src="/img/phone.jpg" alt="icon3" />
        <span>0965716126</span>
      </FooterItem>
      <FooterItem>
        <IconImage src="/img/gmail.jpg" alt="icon4" />
        <span>onnikatie2007@gmail.com</span>
      </FooterItem>
      <FooterItem>
        <IconImage src="/img/youtube.jpg" alt="icon5" />
        <span>Tiếng Trung Onni</span>
      </FooterItem>
      <FooterItem>
        <IconImage src="/img/wechat.jpg" alt="icon6" />
        <span>0965716126</span>
      </FooterItem>
    </FooterContainer>
  );
}

export default Footer;
