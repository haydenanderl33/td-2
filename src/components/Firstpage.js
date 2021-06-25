import React from "react";
import { Link } from "react-router-dom";

const Firstpage = () => {
  return (
    <>
      I am the Firstpage
      <Link to="/secondpage">Secondpage</Link>
    </>
  );
};

export default Firstpage;
