import React from "react";
import "../styles/AboutPage.css";
import member1 from '../assets/team-member1.jpg';
import member2 from '../assets/team-member2.jpg';
import member3 from '../assets/team-member3.jpg';

const AboutPage = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>เกี่ยวกับสาขาเทคโนโลยีสารสนเทศ</h1>
        <p>วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>วิสัยทัศน์</h2>
          <p>มุ่งมั่นในการผลิตบัณฑิตที่มีความสามารถด้านเทคโนโลยีสารสนเทศที่ทันสมัย เพื่อตอบโจทย์การพัฒนาทางด้านเศรษฐกิจและสังคมของประเทศ</p>
        </div>

        <div className="about-section">
          <h2>ภารกิจ</h2>
          <p>การสร้างองค์ความรู้และพัฒนาทักษะด้านเทคโนโลยีสารสนเทศอย่างต่อเนื่อง พร้อมทั้งสนับสนุนการศึกษาและการวิจัยที่เกี่ยวข้องกับเทคโนโลยีสารสนเทศในระดับสากล</p>
        </div>

        <div className="about-section">
          <h2>ประวัติของสาขา</h2>
          <p>สาขาเทคโนโลยีสารสนเทศของวิทยาลัยเทคโนโลยีโปลิเทคนิคลานนาเริ่มเปิดสอนเมื่อปี พ.ศ. 2540 เพื่อสนับสนุนการศึกษาในสายงานด้านเทคโนโลยีและคอมพิวเตอร์ในระดับอุดมศึกษา</p>
        </div>
      </section>

      <section className="about-team">
        <h2>ทีมงานของเรา</h2>
        <div className="team-members">
          <div className="team-member">
          <img src={member2} alt="Member 2" />
            <h3>อาจารย์สมชาย</h3>
            <p>อาจารย์ผู้เชี่ยวชาญด้านการพัฒนาโปรแกรมและฐานข้อมูล</p>
          </div>
          <div className="team-member">
          <img src={member3} alt="Member 3" />
            <h3>อาจารย์สุกัญญา</h3>
            <p>อาจารย์ผู้เชี่ยวชาญด้านเครือข่ายและความปลอดภัยทางคอมพิวเตอร์</p>
          </div>
          <div className="team-member">
          <img src={member1} alt="Member 1" />
            <h3>อาจารย์ธนพัฒน์</h3>
            <p>อาจารย์ผู้เชี่ยวชาญด้านเทคโนโลยีคลาวด์และการพัฒนาระบบ</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

