import './App.css';
import React from 'react';
import Container from './components';
import { Routes, Route, Outlet } from 'react-router-dom';
import LogIn from './components/Forms/LogIn';
import SingUp from './components/Forms/SingUp';
import Detail from './components/Detail';
import { useContext } from 'react';
import { FormContext } from './Contexts/formProvider';
import NotFound from './NotFound';
import Cart from './components/Cart';
// import { Link } from 'react-router-dom';
// import Page from './components/Content';
export default function App() {
  const showState = useContext(FormContext);
  if (!showState) {
    console.error('showState is undefined');
    return null;
  }

  const { show, showSingUp } = showState;

  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Container />}></Route>
        <Route path="/LogIn" element={<LogIn />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/Detail" element={<Detail />}></Route>
      </Routes>
      <Outlet />
      {show ? <LogIn /> : ''}
      {showSingUp ? <SingUp /> : ''}
    </div>
  );
}
