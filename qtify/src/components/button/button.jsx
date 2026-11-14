// Button.jsx
import React from "react";
import styles from "./button.module.css";

function Button({ children, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

