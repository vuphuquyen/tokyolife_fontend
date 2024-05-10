import './style.scss';
import React from 'react';
export default function Button({
  className,
  name,
  onClick,
  title,
  type,
}) {
  return (
    <>
      <button
        className={className}
        onClick={onClick}
        type={type}
      >
        <i className={name}></i>
        {title}
      </button>
    </>
  );
}
