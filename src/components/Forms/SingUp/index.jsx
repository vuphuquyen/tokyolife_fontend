import './style.scss';
import Button from '../../../assets/button';
import Input from '../../../assets/input';
import React, { useState } from 'react';
import isEmpty from 'validator/lib/isEmpty';
//import isEmail from 'validator/lib/isEmail';
//import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { FormContext } from '../../../Contexts/formProvider';
import axios from 'axios';
export default function SingUp() {
 //const navigate = useNavigate();

 // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const[userName, setUserName] = useState('');
  const [validationMsg, setValidationMsg] = useState({});
  const showState = useContext(FormContext);
  const { onShowSingUp, setShowSingUp } = showState;
  const [roleCode, setRoleCode] = useState('cl');
  
  const validateAll = () => {
    const msg = {};
    // if (isEmpty(email)) {
    //   msg.email = 'Please input your Email';
    // } else if (!isEmail(email)) {
    //   msg.email = 'Your email is incorrect';
    // }

    if (isEmpty(password)) {
      msg.password = 'Please input your Password';
    }
    if (isEmpty(fullName)) {
      msg.fullName = 'Please input your FullName';
    }
    if (isEmpty(userName)) {
      msg.userName = 'Please input your FullName';
    }
    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const onSubmitSingUp = async () => {
    const isValid = validateAll();
    if (isValid) {
      // navigate('/SingUp');
      setShowSingUp(false);
      console.log('Logged in successfully');
    }
    try {
      const response = await axios.post('http://localhost:8081/user', {
        userName,
        password,
        fullName,
        roleCode
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        // Xử lý khi đăng ký thành công
        console.log('Đăng ký thành công!');
      } else {
        // Xử lý khi đăng ký thất bại
        console.error('Đăng ký thất bại!');
      }
    } catch (error) {
      console.error('Lỗi:', error);
    }
  };
  return (
    <div className="SingUp-Form">
      <div className="SingUpForm_wrapper">
        <div className="SingUp_delete">
          <span onClick={onShowSingUp}>X</span>
        </div>
        <h2 className="SingUp_title">Đăng Ký</h2>
        <p className="SingUp_node">
          Nhập số điện thoại của Quý Khách để đăng ký tài khoản
          TokyoLife.
        </p>
        <form action="">
          <div className="SingUp_eamil SingUpBlock">
            <label htmlFor="userName">UserName: </label>
            <Input
              label="UesrName: "
              placeholder="Nhập user"
              type="text"
              value={userName}
              autoComplete="userName"
              onChange={(e) => setUserName(e.target.value)}
            />
            <p>{validationMsg.userName}</p>
          </div>
          <div className="SingUp_pasword SingUpBlock">
            <label htmlFor="paswword">Password: </label>
            <Input
              label="PassWord: "
              placeholder="Nhập passWord"
              type="password"
              autoComplete="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>{validationMsg.password}</p>
          </div>
          <div className='SingUp_user SingUpBlock'>
          <label htmlFor="paswword">Fullname: </label>
          <Input
              label="FullName: "
              placeholder="Nhập fullname"
              type="text"
              autoComplete="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <p>{validationMsg.fullName}</p>
          </div>
          <label className="SingUp_checkbox">
            <input type="checkbox" name="remeber" id="remeber" />
            <span>Giữ trạng thái đăng ký</span>
          </label>
          <div className="SingUp_button">
            <Button
              title="Đăng Ký"
              onClick={onSubmitSingUp}
              type="button"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
