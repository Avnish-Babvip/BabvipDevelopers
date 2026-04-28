import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import Style11 from "./Style11";
import Style12 from "./Style12";
import Style13 from "./Style13";
import Style14 from "./Style14";
import Style15 from "./Style15";
import Style16 from "./Style16";
import Style17 from "./Style17";
import Style18 from "./Style18";
import Style19 from "./Style19";
import Style20 from "./Style20";

const Portfolio = ({ data, styleName }) => {
  const dispatch = useDispatch();

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
    "Style 11": Style11,
    "Style 12": Style12,
    "Style 13": Style13,
    "Style 14": Style14,
    "Style 15": Style15,
    "Style 16": Style16,
    "Style 17": Style17,
    "Style 18": Style18,
    "Style 19": Style19,
    "Style 20": Style20,
  };

  const Component = componentMap[styleName];

  return <Component data={data} />;
};

export default Portfolio;
