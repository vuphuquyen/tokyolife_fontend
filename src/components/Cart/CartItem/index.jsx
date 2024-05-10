import './style.scss';
import React from 'react';
export default function CartItem({
  item,
  image,
  onRemove,
  onDecrement,
  onIncrement,
}) {
  return (
    <tr className="cart_product-item">
      <th className="cart_img">
        <img src={image[0]} alt="" />
      </th>
      <th className="cart_name">{item.name}</th>
      <th className="cart_price_all">
        <span>{item.price}</span>
        <span>{item.old_price}</span>
      </th>
      <th className="cart_number">
        <span onClick={() => onDecrement(item)}>-</span>
        <span>{item.quantity}</span>
        <span onClick={() => onIncrement(item)}>+</span>
      </th>
      <th className="cart_total">
        <span>{item.originalPrice}</span>
        <span onClick={() => onRemove(item)}>Xóa</span>
      </th>
    </tr>
  );
}
