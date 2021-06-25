import React from "react";
import { Link } from "react-router-dom";

const Secondpage = () => {
  return (
    <>
      I am the Secondpage
      <Link to="/">Firstpage</Link>
      <Link to="/thirdpage">Thirdpage</Link>
    </>
  );
};

export default Secondpage;
