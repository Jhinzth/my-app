import React from "react";
import "../styles/Footer.css";
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="Polytechnic Lanna IT Department" className="footer-logo" />
          <h2>สาขาเทคโนโลยีสารสนเทศ</h2>
          <p>วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่</p>
          <p>© 2024 สาขาเทคโนโลยีสารสนเทศ | All Rights Reserved</p>
        </div>
        <div className="footer-right">
          <h3>ติดต่อเรา</h3>
          <ul>
            <li>โทรศัพท์: 053-123-456</li>
            <li>อีเมล: it@plc.ac.th</li>
            <li>ที่อยู่: วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา, เชียงใหม่</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



