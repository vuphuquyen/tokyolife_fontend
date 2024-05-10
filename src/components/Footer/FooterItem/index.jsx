import './style.scss';
import React from 'react';

export default function FooterItem({ list }) {
  return (
    <div className="FooterItem">
      <h3>{list.title}</h3>
      <p>{list.text1}</p>
      <p>{list.text2}</p>
      <p>{list.text3}</p>
      <p>{list.text4}</p>
    </div>
  );
}
