import './style.scss';
import React from 'react';
import ProductItem from './ProductItem';
import { useContext, useState, useEffect } from 'react';
import { ContainerContext } from '../../../Contexts/containerProvider';
import Button from '../../../assets/button';

export default function PageBody() {
  const dataProduct = useContext(ContainerContext);

  const { dataList, onDetail, dataListSearch } = dataProduct;
  // console.log('data', dataList);

  const [currentPage, setCurrentPage] = useState(0);
  const [show, setShow] = useState(false);
  const [showBack, setShowBack] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [dataListCart, setDataListCart] = useState([]);

  const productsPerPage = 4;

  const indexOfLastProduct = currentPage + productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = dataList.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  useEffect(() => {
    const handleScroll = () => {
      // Lấy vị trí cuộn hiện tại
      const currentPosition = window.scrollY;

      // Kiểm tra nếu người dùng cuộn đến một vị trí cụ thể (ví dụ: 500 pixel)
      if (
        currentPosition >= 500 &&
        currentPosition > scrollPosition
      ) {
        setDataListCart(dataList);
        setScrollPosition(currentPosition);
      }
    };

    // Gắn sự kiện cuộn
    window.addEventListener('scroll', handleScroll);

    // Hủy sự kiện khi component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition, dataList]);

  const handelBackBanner = () => {
    if (currentPage >= 1) {
      setCurrentPage(currentPage - 1);

      setShowBack(true);
      setTimeout(() => {
        setShowBack(false);
      }, 300);
    }
  };
  const handelNextBanner = () => {
    if (indexOfLastProduct < dataList.length) {
      setCurrentPage(currentPage + 1);

      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 300);
    }
  };
  return (
    <div className="Page_Body">
      <div className="Page_Body-shirt">
        {(dataListSearch.length ? dataListSearch : dataListCart).map(
          (item, index) => {
            return (
              <ProductItem
                name={item.name}
                image={item.image}
                sale={item.sale}
                price={item.price}
                old_price={item.old_price}
                status={item.status}
                key={index}
                onClick={() => onDetail(item)}
              />
            );
          }
        )}
      </div>
      <div className="Page_Body-Two">
        <Button
          onClick={handelBackBanner}
          name="fa-solid fa-chevron-left"
          className="Page_Body-Two-button Page_Body-Two-button-back"
        />
        <div
          className={`Page_Body-Two-wrapper ${
            show ? 'Page_body-show' : ''
          } ${showBack ? 'Page_body-showBack' : ''}
          
          `}
        >
          {currentProducts.map((product, index) => {
            return (
              <ProductItem
                name={product.name}
                image={product.image}
                sale={product.sale}
                price={product.price}
                old_price={product.old_price}
                status={product.status}
                key={index}
                onClick={() => onDetail(product)}
              />
            );
          })}
        </div>
        <Button
          onClick={handelNextBanner}
          name="fa-solid fa-chevron-right"
          className="Page_Body-Two-button Page_Body-Two-button-next"
        />
      </div>
    </div>
  );
}
