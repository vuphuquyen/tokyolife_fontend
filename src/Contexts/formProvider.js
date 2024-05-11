import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export default function FormProvider({ children }) {
  const [show, setShow] = useState(false);
  const [showSingUp, setShowSingUp] = useState(false);
  const [logIn, setLogIn] =useState(true);

  const handleShow = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  const handleShowSingUp = () => {
    if (showSingUp) {
      setShowSingUp(false);
    } else {
      setShowSingUp(true);
    }
  };
  console.log("Status LogIn",logIn)
  return (
    <FormContext.Provider
      value={{
        show: show,
        onShow: handleShow,
        setShow: setShow,
        showSingUp: showSingUp,
        setShowSingUp: setShowSingUp,
        onShowSingUp: handleShowSingUp,
        onLogIn: logIn,
        onsetLogIn: setLogIn,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
