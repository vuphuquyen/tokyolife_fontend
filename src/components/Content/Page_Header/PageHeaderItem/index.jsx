import './style.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHeaderItem({
  img,
  image,
  name,
  link,
}) {
  return (
    <div className="Page_Header-Wrapper">
      <Link to={link} className="Page_Header-Item">
        <img
          src={image}
          alt=""
          className="Page_Header-Item-image"
        />
        <p>{name}</p>
        {img ? (
          <img
            src={img}
            alt=""
            className="Page_Header-Item-img"
          />
        ) : (
          ''
        )}
      </Link>
    </div>
  );
}
