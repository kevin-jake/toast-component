import React, { useContext } from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider/ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toastsArray, handleDismiss } = useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {toastsArray.map(({ isShown, message, variant, id }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast
            isShown={isShown}
            variant={variant}
            dismiss={() => handleDismiss(id)}
          >
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
