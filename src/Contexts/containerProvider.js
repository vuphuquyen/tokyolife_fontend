import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
export const ContainerContext = createContext();

export default function ContainerProvider({ children }) {
  // const navigate = useNavigate();
  const [listCartProduct, setListCartProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // const [testApi, setTestApi] = useState([]);

  const [detail, setDetail] = useState(
    () => JSON.parse(localStorage.getItem('listDetail')) || {}
  );

  const [datalist, setDataList] = useState(() =>
    JSON.parse(localStorage.getItem('listCart') || [])
  );
  const [dataListSearch, setDataListSearch] = useState([]);

  // //////////////////////
  // useEffect(() =>{
  //   const postData = async () => {
  //     try {
  //         const response = await axios.get('http://localhost:8081/new');
  //         setTestApi(response)
  //     } catch (error) {
  //         console.error('Error:', error);
  //     }
  // };
  // postData();
  // },[]);
  // console.log("Test Api",testApi);
  useEffect(() => {
    const getUser = async () => {
      try {
        setIsLoading(true);
        const resProduct = await axios.get(
          'https://6540f8ce45bedb25bfc2f614.mockapi.io/user/v4/product'
        );
        console.log('==============', resProduct);
        const newData = resProduct.data.map((item) => {
          return { ...item, quantity: 1, originalPrice: item.price };
        });
        setListCartProduct(newData);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setIsError(true);
      }
    };
    getUser();
  }, []);
  console.log('dataproduct', listCartProduct);

  const handleCartAdd = (item) => {
    const checkCart = datalist.find((it) => it.id === item.id);

    if (checkCart) {
      const updatedCart = datalist.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + item.quantity,
            originalPrice:
              (cartItem.quantity + item.quantity) * cartItem.price,
          };
        }

        return cartItem;
      });
      localStorage.setItem('listCart', JSON.stringify(updatedCart));
      setDataList(updatedCart);
    } else {
      const newList = [...datalist, item];
      localStorage.setItem('listCart', JSON.stringify(newList));
      setDataList(newList);
    }
  };

  const handleDetail = (item) => {
    localStorage.setItem('listDetail', JSON.stringify(item));

    setDetail(item);
  };
  // console.log('detail', detail);

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      const newList = { ...item, quantity: item.quantity - 1 };
      localStorage.setItem('listDetail', JSON.stringify(newList));

      setDetail(newList);
    }
  };
  const handleIncrement = (item) => {
    const newList = { ...item, quantity: item.quantity + 1 };
    localStorage.setItem('listDetail', JSON.stringify(newList));

    setDetail(newList);
  };

  const handleSearch = (search) => {
    const listSearch = listCartProduct.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setDataListSearch(listSearch);
  };
  if (isLoading) return <h1> Loagding...</h1>;
  if (isError) return <h1> Error...</h1>;

  return (
    <ContainerContext.Provider
      value={{
        listDataCart: datalist,
        dataList: listCartProduct,
        onDetail: handleDetail,
        detailList: detail,
        onCart: handleCartAdd,
        onSearch: handleSearch,
        dataListSearch: dataListSearch,
        onIncrement: handleIncrement,
        onDecrement: handleDecrement,
      }}
    >
      {children}
    </ContainerContext.Provider>
  );
}
