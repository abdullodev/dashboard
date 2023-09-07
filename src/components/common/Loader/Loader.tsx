import React from "react";
import { LoaderStyle } from "./Loader.style";

const Loader = () => {
  return (
    <LoaderStyle>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderStyle>
  );
};

export default Loader;
