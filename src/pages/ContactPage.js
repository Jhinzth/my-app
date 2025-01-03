import React, { useState } from "react";
import "../styles/ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('ข้อความของคุณถูกส่งเรียบร้อยแล้ว');
    setFormData({ name: '', email: '', message: '' }); // รีเซ็ตฟอร์มหลังจากส่งข้อมูล
  };

  return (
    <div className="contact-container">
      <section className="contact-hero">
        <h1>ติดต่อเรา</h1>
        <p>หากคุณมีคำถามหรือข้อสงสัยเกี่ยวกับสาขาเทคโนโลยีสารสนเทศ กรุณากรอกฟอร์มด้านล่างหรือติดต่อเราโดยตรง</p>
      </section>

      <section className="contact-form-section">
        <div className="contact-details">
          <h2>ข้อมูลติดต่อ</h2>
          <p><strong>ที่อยู่:</strong> วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา, เชียงใหม่</p>
          <p><strong>โทรศัพท์:</strong> 053-123-456</p>
          <p><strong>อีเมล:</strong> it@plc.ac.th</p>
        </div>

        <div className="contact-form">
          <h2>ฟอร์มติดต่อ</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">ชื่อ</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="กรุณากรอกชื่อของคุณ"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">อีเมล</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="กรุณากรอกอีเมล"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">ข้อความ</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="กรุณากรอกข้อความของคุณ"
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">ส่งข้อความ</button>
          </form>
        </div>
      </section>

      <section className="map-section">
        <h2>แผนที่</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.5288391746527!2d98.9934886143872!3d18.78817198726968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3aa35c70a44d%3A0x7d7d728df914a356!2z4Lia4Li04Lip4Lix4LiT4LiXIOC5geC4reC4meC5hOC4reC5jCDguKrguK3guIfguJjguYHguKPguLTguKrguJnguJc!5e0!3m2!1sth!2sth!4v1692354309380!5m2!1sth!2sth"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
