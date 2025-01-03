import React from "react";
import "../styles/CoursesPage.css";

const courses = [
  {
    title: "หลักสูตรการพัฒนาเว็บแอปพลิเคชัน",
    description: "เรียนรู้การพัฒนาเว็บแอปพลิเคชันด้วยเทคโนโลยีต่าง ๆ เช่น HTML, CSS, JavaScript, React.js, Node.js",
    duration: "6 เดือน",
    fees: "15,000 บาท"
  },
  {
    title: "หลักสูตรการพัฒนาแอปพลิเคชันมือถือ",
    description: "เรียนรู้การพัฒนาแอปพลิเคชันมือถือด้วย React Native, Flutter และการพัฒนาแอปสำหรับ iOS และ Android",
    duration: "6 เดือน",
    fees: "18,000 บาท"
  },
  {
    title: "หลักสูตรการพัฒนาระบบฐานข้อมูล",
    description: "เรียนรู้การออกแบบและพัฒนาระบบฐานข้อมูล รวมถึง SQL, NoSQL และเทคโนโลยีฐานข้อมูลสมัยใหม่",
    duration: "4 เดือน",
    fees: "12,000 บาท"
  }
];

const CoursesPage = () => {
  return (
    <div className="courses-container">
      <section className="courses-hero">
        <h1>หลักสูตรที่เปิดสอน</h1>
        <p>เลือกหลักสูตรที่เหมาะสมกับคุณและเริ่มต้นเส้นทางอาชีพในสายเทคโนโลยีสารสนเทศ</p>
      </section>

      <section className="courses-list">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p><strong>ระยะเวลา:</strong> {course.duration}</p>
            <p><strong>ค่าใช้จ่าย:</strong> {course.fees}</p>
            <button className="btn-learn-more">เรียนรู้เพิ่มเติม</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CoursesPage;




