import React, { createContext, useState } from "react";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [selection, setSelection] = useState("notice");
  const [message, setMessage] = useState("");
  const [toastsArray, setToastsArray] = useState([]);

  const toastId = Math.random();

  const handleSubmit = (event) => {
    event.preventDefault();
    setToastsArray([
      ...toastsArray,
      { isShown: true, message: message, variant: selection, id: toastId },
    ]);
    setSelection("notice");
    setMessage("");
  };

  const handleDismiss = (id) => {
    console.log(id);
    const toastsCopy = [...toastsArray];
    const newArr = toastsCopy.filter((item) => item.id !== id);
    setToastsArray(newArr);
  };

  return (
    <ToastContext.Provider
      value={{
        selection,
        message,
        toastsArray,
        handleDismiss,
        handleSubmit,
        setMessage,
        setSelection,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
