import React from "react";
import Style1 from "./Style1";
import Style2 from "./Style2";

const PrivacyAndTerms = ({ data, styleName }) => {
  const componentMap = {
    "Style 1": Style1,
    "Style 2": Style2,
  };

  const Component = componentMap[styleName];

  return <Component data={data} />;
};

export default PrivacyAndTerms;
