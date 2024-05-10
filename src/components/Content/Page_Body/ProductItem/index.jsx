import './style.scss';
import React from 'react';
import imgBlock from '../../../../assets/imgBlock/sale.svg';
import { Link } from 'react-router-dom';

export default function ProductItem({
  image,
  sale,
  name,
  price,
  old_price,
  status,
  onClick,
}) {
  return (
    <div className="Product_Wrapper" onClick={onClick}>
      <Link to="/Detail">
        <div className="Product_sale">
          <div>
            <img src={imgBlock} alt="" />
            <span>{sale}</span>
          </div>
        </div>
        <div className="Product_parter">
          <img src={image[0]} alt="" />
          <p>{name}</p>
          <div className="Product_price">
            <span className="Product_price-one">{price}đ</span>
            <span className="Product_price-old">{old_price}đ</span>
          </div>
          <div className="Product_status">
            <p className="Product_status-text">{status}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
