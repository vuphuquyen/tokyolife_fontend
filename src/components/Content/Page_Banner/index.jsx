import './style.scss';
import React from 'react';
import { useState } from 'react';
import banner1 from '../../../assets/logo/logo1.webp';
import banner2 from '../../../assets/logo/logo2.webp';
import banner3 from '../../../assets/logo/logo3.webp';
import banner4 from '../../../assets/logo/logo4.webp';
import banner5 from '../../../assets/logo/logo5.webp';
import banner6 from '../../../assets/logo/logo6.webp';
import Button from '../../../assets/button';
export default function PageBanner() {
  const bannerContent = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
  ];
  const [currentBanner, setCurrentBanner] = useState(0);

  const handelBackBanner = () => {
    setCurrentBanner((prevBanner) => {
      const newIndex =
        (prevBanner - 1 + bannerContent.length) %
        bannerContent.length;
      return newIndex;
    });
  };
  const handelNextBanner = () => {
    setCurrentBanner(
      (prevBanner) => (prevBanner + 1) % bannerContent.length
    );
  };
  return (
    <div className="Header_Banner">
      <div className="Header_Banner-Wrapper">
        <Button
          onClick={handelBackBanner}
          name="fa-solid fa-chevron-left"
          className="Header_Banner-back Header_Banner-button"
        />
        <img
          src={bannerContent[currentBanner]}
          alt="Ảnh đang được tải"
          border="0"
          className="Header-Banner-img"
        />
        <Button
          onClick={handelNextBanner}
          name="fa-solid fa-chevron-right"
          className="Header_Banner-next Header_Banner-button"
        />
      </div>
    </div>
  );
}
