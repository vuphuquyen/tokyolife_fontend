import './style.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarItem({
  name,
  link,
  img,
  index,
}) {
  return (
    <li key={index} className="Header_Navbar-item">
      {img ? <img src={img} alt="Ảnh lỗi" /> : ''}
      <Link to={link} className="Header_Navbar-item-name">
        {name} 
      </Link>
    </li>
  );
}
