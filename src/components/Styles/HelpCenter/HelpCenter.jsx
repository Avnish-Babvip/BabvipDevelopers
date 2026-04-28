import React from "react";
import Style1 from "./Style1";

const HelpCenter = ({ data, styleName }) => {
  const componentMap = {
    "Style 1": Style1,
  };

  const Component = componentMap[styleName];

  return <Component data={data} />;
};

export default HelpCenter;
