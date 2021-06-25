import React from "react";
import { Link } from "react-router-dom";

const Secondpage = () => {
  return (
    <>
      I am the Secondpage
      <Link to="/firstpage">Firstpage</Link>
    </>
  );
};

export default Secondpage;
