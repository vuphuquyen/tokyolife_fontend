import './style.scss';
import React from 'react';
import HeaderContent from './Header_Content';
import HeaderNavbar from './Header_Navbar';
export default function Header() {
  return (
    <div className="Header">
      <div className="Header_wrapper-list">
        <div className="Header_title">
          <p className="Header_title-text">
            CHỌN TIÊU DÙNG HÀNG NHẬT TUẦN LỄ VÀNG{' '}
          </p>
        </div>
        <HeaderContent />
        <HeaderNavbar />
      </div>
    </div>
  );
}
// onMouseEnter
// onMouseLeave
