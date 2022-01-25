import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import styles from "../styles/Register.module.css";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   console.log(name, email, password);

  const registerHandler = async (e) => {
    e.preventDefault();
    
    try {
      const user = await axios.post(
        "http://localhost:5000/api/v1/users/signup",
        {
          name: name,
          password: password,
          email: email,
        }
      );
      console.log(user.data);
      navigate("/profile");
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log(err.message);
      }
    }
  };

  return (
    <section className={styles.register}>
      <div className={styles["register-card"]}>
        <h1>Register</h1>
        <p>Lets Login to create awesome content</p>
        <form onSubmit={registerHandler}>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={styles.password}
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className={styles.password}
            type="password"
            placeholder="check password"
          />
          <button type="submit">Register</button>
        </form>
        <span> ------or-------</span>
        <div>
          <h4>Already have an account? </h4>
          <Link to='/login'>Sign In</Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
