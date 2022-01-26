import React from "react";
import styles from "../styles/Blog.module.css";

const Blog = ({ title, image, desc, createdAt }) => {
  const date = new Date(createdAt);
  const dateString = date.toDateString();

  const singleBlogHandler = () =>{
    
  }

  return (
    <div className={styles.blog} onClick={singleBlogHandler}>
      <div className={styles["blog-desc"]}>
        <h1>{title}</h1>
        <p>{desc}</p>
        <span>{dateString}</span>
      </div>
      <div className={styles["blog-img"]}>
        <img width={200} src={`http://localhost:5000/${image}`} alt="" />
      </div>
    </div>
  );
};

export default Blog;
