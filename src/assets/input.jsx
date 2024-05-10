import './style.scss';
import React from 'react';
export default function Input({
  type,
  placeholder,
  value,
  onChange,
  className,
}) {
  return (
    <>
      <input
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={className}
      />
    </>
  );
}
