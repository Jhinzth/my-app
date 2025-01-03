import React from "react";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>ยินดีต้อนรับสู่</h1>
          <h2>สาขาเทคโนโลยีสารสนเทศ</h2>
          <p>วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา</p>
          <a href="#about" className="btn-main">เรียนรู้เพิ่มเติม</a>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h3>หลักสูตรการเรียนการสอน</h3>
          <p>เราเสนอหลักสูตรที่ทันสมัยเกี่ยวกับเทคโนโลยีสารสนเทศที่ตอบโจทย์ในยุคดิจิทัล</p>
        </div>
        <div className="feature">
          <h3>อาจารย์ผู้สอน</h3>
          <p>ทีมอาจารย์ผู้เชี่ยวชาญพร้อมที่จะให้คำแนะนำและช่วยเหลือคุณในทุกขั้นตอน</p>
        </div>
        <div className="feature">
          <h3>กิจกรรมสาขา</h3>
          <p>เรามีกิจกรรมและการอบรมที่ช่วยเสริมทักษะทางด้านเทคโนโลยีต่าง ๆ</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;



