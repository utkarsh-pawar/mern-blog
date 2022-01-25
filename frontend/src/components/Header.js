import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles["header-links"]}>
        <a href="#">Blogs</a>
        <a href="">create a blog</a>
        <a href="">Login/Register</a>
        <a href="">profile</a>
        
      </div>
    </nav>
  );
};

export default Header;
