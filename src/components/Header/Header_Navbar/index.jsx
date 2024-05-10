// export default function HeaderNavbar() {

import './style.scss';
import React from 'react';
import imgHot from '../../../assets/logo/hot.webp';
import NavbarItem from './Header_Navbar-Item';

export default function HeaderNavbar() {
  const dataTitle = [
    {
      link: '/',
      name: 'Trang chủ',
    },
    {
      img: imgHot,
      link: '/',
      name: 'Sinh nhật',
    },
    {
      link: '',
      name: 'Nữ',
    },
    {
      link: '',
      name: 'Nam',
    },
    {
      link: '',
      name: 'Trẻ em',
    },
    {
      link: '',
      name: 'Nhà cửa - Đời sống',
    },
    {
      link: '',
      name: 'Sức khỏe - làm đẹp',
    },
    {
      link: '',
      name: 'Nhãn hiệu',
    },
    {
      img: imgHot,
      link: '/',
      name: 'Áo dữ nhiệt',
    },
  ];
  return (
    <div className="Header_Navbar">
      <ul className="Header_Navbar-Wrapper">
        {dataTitle.map((item, index) => {
          return (
            <NavbarItem
              name={item.name}
              link={item.link}
              img={item.img}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
}
//
