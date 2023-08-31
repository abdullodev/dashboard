import React from "react";
import { LoaderStyle } from "./Loader.style";

const Loader = () => {
  return (
    <LoaderStyle>
      <div className="lds-hourglass"></div>
    </LoaderStyle>
  );
};

export default Loader;
