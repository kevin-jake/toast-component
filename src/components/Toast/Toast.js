import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";
const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, isShown, dismiss, children }) {
  const Icon = ICONS_BY_VARIANT[variant];
  return (
    <>
      {isShown && (
        <div className={`${styles.toast} ${styles[variant]}`}>
          <div className={styles.iconContainer}>
            <Icon size={24} />
          </div>
          <p className={styles.content}>{children}</p>
          <button
            aria-label="Dismiss message"
            aria-live="off"
            className={styles.closeButton}
            onClick={dismiss}
          >
            <X size={24} />
            <VisuallyHidden>Dismiss message</VisuallyHidden>
          </button>
        </div>
      )}
    </>
  );
}

export default Toast;
