import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, dismiss }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ isShown, message, variant, id }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast
            isShown={isShown}
            variant={variant}
            dismiss={() => dismiss(id)}
          >
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
