// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/logo.png';
const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Polytechnic Lanna IT Department" className="logo-img" />
        <h1 className="header-title">สาขาเทคโนโลยีสารสนเทศ</h1>
      </div>

      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="/" className="navbar-link">หน้าแรก</a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">เกี่ยวกับเรา</a>
          </li>
          <li className="navbar-item">
            <a href="/courses" className="navbar-link">หลักสูตร</a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">ติดต่อเรา</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


