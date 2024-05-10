import './style.scss';
import Button from '../../../assets/button';
import Input from '../../../assets/input';
import React, { useState } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { FormContext } from '../../../Contexts/formProvider';

export default function SingUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationMsg, setValidationMsg] = useState({});
  const showState = useContext(FormContext);
  const { onShowSingUp, setShowSingUp } = showState;

  const validateAll = () => {
    const msg = {};
    if (isEmpty(email)) {
      msg.email = 'Please input your Email';
    } else if (!isEmail(email)) {
      msg.email = 'Your email is incorrect';
    }

    if (isEmpty(password)) {
      msg.password = 'Please input your Password';
    }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const onSubmitSingUp = () => {
    const isValid = validateAll();
    if (isValid) {
      navigate('/SingUp');
      setShowSingUp(false);
      console.log('Logged in successfully');
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
            <label htmlFor="email">Email: </label>
            <Input
              label="Email: "
              placeholder="Nhập email"
              type="text"
              value={email}
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>{validationMsg.email}</p>
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
