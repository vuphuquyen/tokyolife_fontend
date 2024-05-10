import React from 'react';
import './style.scss';
import Input from '../../../assets/input.jsx';
import imgNew from '../../../assets/logo/news.gif';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FormContext } from '../../../Contexts/formProvider';
import { ContainerContext } from '../../../Contexts/containerProvider.js';

import { useState } from 'react';
export default function HeaderContent() {
  const [search, setSearch] = useState('');

  const showState = useContext(FormContext);
  const { onShow, onShowSingUp } = showState;

  const listState = useContext(ContainerContext);
  const { onSearch } = listState;

  const handleSearch = (search) => {
    onSearch(search);
    setSearch('');
  };
  console.log('search', search);
  return (
    <div className="Header_Content-wrapper">
      <div className="Header_Content">
        <div className="Header_Content-logo">
          <img
            alt="logo"
            src="https://tokyolife.vn/_next/static/media/logo-header-mobile.3a21670c.svg"
          />
        </div>
        <div className="Header_Content-search">
          <Input
            type="text"
            className="Content-input-search"
            placeholder="Tìm kiếm..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <i
            className="fa-solid fa-magnifying-glass"
            onClick={() => handleSearch(search)}
          ></i>
        </div>
        <div className="Header_Content-icon">
          <div>
            <img src={imgNew} alt="" />
          </div>
          <div className="Header_Content-icon-bin header_icon">
            <i className="fa-solid fa-trash"></i>
          </div>
          <div className="Header_Content-icon-index header_icon">
            <i class="fa-solid fa-store"></i>
          </div>
          <div className="Header_Content-icon-user header_icon">
            <i className="fa-solid fa-user"></i>
            <div className="Header-user">
              <div className="Header-user-wrapper">
                <p>Chào mừng bạn đến với Tokylift</p>
                <div className="Header-user-login">
                  <Link className="LogIn" onClick={onShow}>
                    Đăng nhập
                  </Link>
                </div>
                <div className="Header-uesr-border"></div>
                <div className="Header-user-singup">
                  <Link onClick={onShowSingUp}>Đăng ký</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
