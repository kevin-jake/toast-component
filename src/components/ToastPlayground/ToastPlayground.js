import React, { useState } from "react";

import Button from "../Button";
import Toast from "../Toast/Toast";
import ToastShelf from "../ToastShelf/ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
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
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {/* <Toast
        isShown={isShown}
        variant={selection}
        message={message}
        dismiss={() => setIsShown(false)}
      /> */}
      <ToastShelf toasts={toastsArray} dismiss={handleDismiss} />

      <div className={styles.controlsWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={styles.messageInput}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {/* TODO Other Variant radio buttons here */}
              {VARIANT_OPTIONS.map((item, index) => (
                <label key={index} htmlFor={`variant-${item}`}>
                  <input
                    id={`variant-${item}`}
                    type="radio"
                    name="variant"
                    value={selection}
                    checked={selection === item}
                    onChange={() => setSelection(item)}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button type="submit">Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
