import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export default function FormProvider({ children }) {
  const [show, setShow] = useState(false);
  const [showSingUp, setShowSingUp] = useState(false);

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
  return (
    <FormContext.Provider
      value={{
        show: show,
        onShow: handleShow,
        setShow: setShow,
        showSingUp: showSingUp,
        setShowSingUp: setShowSingUp,
        onShowSingUp: handleShowSingUp,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
