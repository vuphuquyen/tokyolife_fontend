import './style.scss';
import React from 'react';
import deal111 from '../../../assets/logo/deal111.webp';
import deal249 from '../../../assets/logo/deal249.webp';
import deal399 from '../../../assets/logo/deal399.webp';
import deal57 from '../../../assets/logo/deal57.webp';

import aodunhiet from '../../../assets/titleImage/aodunhiet.webp';
import nam from '../../../assets/titleImage/nam.webp';
import nu from '../../../assets/titleImage/nu.webp';
import phao from '../../../assets/titleImage/phao.webp';
import balo from '../../../assets/titleImage/balo.webp';
import longcuu from '../../../assets/titleImage/long_cuu.webp';
import nuochoa from '../../../assets/titleImage/nuochoa.webp';
import polo from '../../../assets/titleImage/polo.webp';
import he from '../../../assets/titleImage/he.webp';
import tayrua from '../../../assets/titleImage/tay_rua.webp';

import PageHeaderItem from './PageHeaderItem';
export default function PageHeader() {
  const dataTitle = [
    {
      name: 'Áo giữ nhiệt',
      img: deal111,
      image: aodunhiet,
    },
    {
      name: 'Áo lông cừu',
      img: deal249,
      image: longcuu,
    },
    {
      name: 'Áo phao',
      img: deal399,
      image: phao,
    },
    {
      name: 'Áo Polo',
      img: deal111,
      image: polo,
    },
    {
      name: 'Thời trang hè',
      img: deal57,
      image: he,
    },
    {
      name: 'Nữ',
      image: nu,
    },
    {
      name: 'Nam',
      image: nam,
    },
    {
      name: 'Balo Túi Ví',
      image: balo,
    },
    {
      name: 'Nước hoa',
      img: deal111,
      image: nuochoa,
    },
    {
      name: 'Tẩy rửa',
      image: tayrua,
    },
  ];
  return (
    <div className="Page_Header">
      <div className="Page_Header-title">
        <p>ƯU ĐÃI NỔI BẬT HÔM NAY</p>
      </div>
      <div className="Page_Header-content">
        {dataTitle.map((item, index) => {
          return (
            <PageHeaderItem
              img={item.img}
              image={item.image}
              key={index}
              name={item.name}
            />
          );
        })}
      </div>
      <div className="Page_Header-flash">
        <svg
          width="181"
          height="26"
          viewBox="0 0 181 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.3233 11.8984H24.5864L29.618 1.8358C29.8415 1.38826 29.5164 0.861816 29.0159 0.861816H22.1054C21.612 0.861816 21.1767 1.18353 21.0315 1.6548L17.1378 14.3099C16.9999 14.7569 17.3343 15.2094 17.8017 15.2094H22.1584L18.9909 25.549C18.8943 25.8023 19.2221 26.0004 19.4014 25.7973L29.7736 12.8967C30.1163 12.5093 29.8409 11.8984 29.3233 11.8984Z"
            fill="url(#paint0_linear_3752_268777)"
          ></path>
          <path
            d="M0 1.74544H14.3708V5.49557H4.66801V11.436H12.1035V15.1198H4.66801V24.9099H0V1.74544Z"
            fill="url(#paint1_linear_3752_268777)"
          ></path>
          <path
            d="M47.2555 20.4961H37.9862L36.4524 24.9099H31.551L39.9201 1.71226H45.355L53.7241 24.9099H48.7893L47.2555 20.4961ZM42.6209 7.08854L39.2532 16.7791H45.9885L42.6209 7.08854Z"
            fill="url(#paint2_linear_3752_268777)"
          ></path>
          <path
            d="M73.1236 18.2062C73.1236 19.1133 72.9458 19.9872 72.5902 20.8279C72.2345 21.6687 71.701 22.4098 70.9897 23.0515C70.3006 23.6931 69.4448 24.2019 68.4223 24.5781C67.3998 24.9542 66.2217 25.1422 64.8879 25.1422C63.6876 25.1422 62.5651 24.9874 61.5203 24.6776C60.4756 24.3679 59.5642 23.9254 58.7862 23.3501C58.0082 22.7528 57.3969 22.0337 56.9523 21.193C56.5078 20.3301 56.2744 19.3456 56.2521 18.2393H61.2536C61.3202 19.1686 61.6537 19.9208 62.2539 20.4961C62.854 21.0492 63.6987 21.3257 64.7879 21.3257C65.8993 21.3257 66.7551 21.0713 67.3553 20.5624C67.9777 20.0314 68.2889 19.3456 68.2889 18.5048C68.2889 17.8854 68.1111 17.3765 67.7554 16.9782C67.422 16.5579 66.9663 16.2149 66.3884 15.9495C65.8327 15.6618 65.1991 15.4185 64.4878 15.2193C63.7765 15.0202 63.043 14.81 62.2872 14.5888C61.5314 14.3454 60.7979 14.0689 60.0866 13.7591C59.3752 13.4494 58.7306 13.0511 58.1527 12.5644C57.597 12.0776 57.1524 11.4803 56.819 10.7723C56.4855 10.0422 56.3188 9.15719 56.3188 8.11733C56.3188 7.07748 56.5189 6.14824 56.919 5.32963C57.3191 4.4889 57.8859 3.78091 58.6195 3.20567C59.353 2.63043 60.2199 2.18794 61.2202 1.87819C62.2205 1.56845 63.3208 1.41357 64.5212 1.41357C66.9219 1.41357 68.8669 1.98881 70.3562 3.13929C71.8677 4.28977 72.7013 5.91593 72.8569 8.01777H67.7221C67.6776 7.24341 67.3553 6.6018 66.7551 6.09293C66.1772 5.56194 65.3881 5.28538 64.3878 5.26326C63.4542 5.21901 62.6873 5.42919 62.0871 5.89381C61.487 6.3363 61.1869 7.03323 61.1869 7.98459C61.1869 8.75895 61.4758 9.36738 62.0538 9.80987C62.654 10.2302 63.3986 10.5953 64.2878 10.905C65.1769 11.1927 66.1327 11.4803 67.1553 11.7679C68.1778 12.0555 69.1336 12.4538 70.0228 12.9626C70.9119 13.4494 71.6454 14.1131 72.2234 14.9538C72.8236 15.7725 73.1236 16.8566 73.1236 18.2062Z"
            fill="url(#paint3_linear_3752_268777)"
          ></path>
          <path
            d="M91.8082 15.0534H81.8387V24.9099H77.1706V1.74544H81.8387V11.2701H91.8082V1.74544H96.4762V24.9099H91.8082V15.0534Z"
            fill="url(#paint4_linear_3752_268777)"
          ></path>
          <path
            d="M125.287 18.2062C125.287 19.1133 125.109 19.9872 124.754 20.8279C124.398 21.6687 123.864 22.4098 123.153 23.0515C122.464 23.6931 121.608 24.2019 120.586 24.5781C119.563 24.9542 118.385 25.1422 117.051 25.1422C115.851 25.1422 114.729 24.9874 113.684 24.6776C112.639 24.3679 111.728 23.9254 110.95 23.3501C110.172 22.7528 109.56 22.0337 109.116 21.193C108.671 20.3301 108.438 19.3456 108.416 18.2393H113.417C113.484 19.1686 113.817 19.9208 114.417 20.4961C115.017 21.0492 115.862 21.3257 116.951 21.3257C118.063 21.3257 118.919 21.0713 119.519 20.5624C120.141 20.0314 120.452 19.3456 120.452 18.5048C120.452 17.8854 120.275 17.3765 119.919 16.9782C119.585 16.5579 119.13 16.2149 118.552 15.9495C117.996 15.6618 117.363 15.4185 116.651 15.2193C115.94 15.0202 115.206 14.81 114.451 14.5888C113.695 14.3454 112.961 14.0689 112.25 13.7591C111.539 13.4494 110.894 13.0511 110.316 12.5644C109.76 12.0776 109.316 11.4803 108.982 10.7723C108.649 10.0422 108.482 9.15719 108.482 8.11733C108.482 7.07748 108.682 6.14824 109.082 5.32963C109.483 4.4889 110.049 3.78091 110.783 3.20567C111.516 2.63043 112.383 2.18794 113.384 1.87819C114.384 1.56845 115.484 1.41357 116.685 1.41357C119.085 1.41357 121.03 1.98881 122.52 3.13929C124.031 4.28977 124.865 5.91593 125.02 8.01777H119.886C119.841 7.24341 119.519 6.6018 118.919 6.09293C118.341 5.56194 117.552 5.28538 116.551 5.26326C115.618 5.21901 114.851 5.42919 114.251 5.89381C113.65 6.3363 113.35 7.03323 113.35 7.98459C113.35 8.75895 113.639 9.36738 114.217 9.80987C114.817 10.2302 115.562 10.5953 116.451 10.905C117.34 11.1927 118.296 11.4803 119.319 11.7679C120.341 12.0555 121.297 12.4538 122.186 12.9626C123.075 13.4494 123.809 14.1131 124.387 14.9538C124.987 15.7725 125.287 16.8566 125.287 18.2062Z"
            fill="url(#paint5_linear_3752_268777)"
          ></path>
          <path
            d="M142.595 20.4961H133.326L131.792 24.9099H126.891L135.26 1.71226H140.695L149.064 24.9099H144.129L142.595 20.4961ZM137.961 7.08854L134.593 16.7791H141.328L137.961 7.08854Z"
            fill="url(#paint6_linear_3752_268777)"
          ></path>
          <path
            d="M156.86 1.74544V21.2262H164.529V24.9099H152.192V1.74544H156.86Z"
            fill="url(#paint7_linear_3752_268777)"
          ></path>
          <path
            d="M181 5.49557H172.164V11.3033H180V14.987H172.164V21.1266H181V24.9099H167.496V1.71226H181V5.49557Z"
            fill="url(#paint8_linear_3752_268777)"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_3752_268777"
              x1="22.9492"
              y1="43.0768"
              x2="31.4679"
              y2="42.0945"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7A171B"></stop>
              <stop offset="1" stop-color="#D10007"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_3752_268777"
              x1="82.4985"
              y1="41.4507"
              x2="113.379"
              y2="-11.5599"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7A171B"></stop>
              <stop offset="1" stop-color="#D10007"></stop>
            </linearGradient>
            <linearGradient
              id="paint2_linear_3752_268777"
              x1="82.4985"
              y1="41.4507"
              x2="113.379"
              y2="-11.5599"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7A171B"></stop>
              <stop offset="1" stop-color="#D10007"></stop>
            </linearGradient>
            <linearGradient
              id="paint3_linear_3752_268777"
              x1="82.4985"
              y1="41.4507"
              x2="113.379"
              y2="-11.5599"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7A171B"></stop>
              <stop offset="1" stop-color="#D10007"></stop>
            </linearGradient>
            <linearGradient
              id="paint4_linear_3752_268777"
              x1="82.4985"
              y1="41.4507"
              x2="113.379"
              y2="-11.5599"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7A171B"></stop>
              <stop offset="1" stop-color="#D10007"></stop>
            </linearGradient>
            <linearGradient
              id="paint5_linear_3752_268777"
              x1="82.4985"
              y1="41.4507"
              x2="113.379"
              y2="-11.5599"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7A171B"></stop>
              <stop offset="1" stop-color="#D10007"></stop>
            </linearGradient>
            <linearGradient
              id="paint6_linear_3752_268777"
              x1="82.4985"
              y1="41.4507"
              x2="113.379"
              y2="-11.5599"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7A171B"></stop>
              <stop offset="1" stop-color="#D10007"></stop>
            </linearGradient>
            <linearGradient
              id="paint7_linear_3752_268777"
              x1="82.4985"
              y1="41.4507"
              x2="113.379"
              y2="-11.5599"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7A171B"></stop>
              <stop offset="1" stop-color="#D10007"></stop>
            </linearGradient>
            <linearGradient
              id="paint8_linear_3752_268777"
              x1="82.4985"
              y1="41.4507"
              x2="113.379"
              y2="-11.5599"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7A171B"></stop>
              <stop offset="1" stop-color="#D10007"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
