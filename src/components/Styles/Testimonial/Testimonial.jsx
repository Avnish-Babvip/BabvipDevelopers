import React from "react";
import Style1 from "./Style1";
import Style2 from "./Style2";
import Style3 from "./Style3";
import Style4 from "./Style4";
import Style5 from "./Style5";
import Style6 from "./Style6";
import Style7 from "./Style7";
import Style8 from "./Style8";
import Style9 from "./Style9";
import Style10 from "./Style10";

const Testimonial = ({ data, styleName }) => {
  const componentMap = {
    "Style 1": Style1,
    "Style 2": Style2,
    "Style 3": Style3,
    "Style 4": Style4,
    "Style 5": Style5,
    "Style 6": Style6,
    "Style 7": Style7,
    "Style 8": Style8,
    "Style 9": Style9,
    "Style 10": Style10,
  };

  const Component = componentMap[styleName];

  return <Component data={data} />;
};

export default Testimonial;
