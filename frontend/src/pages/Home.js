import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.user.isUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/register");
    }
  });

  return <div>this is a post home page</div>;
};

export default Home;
