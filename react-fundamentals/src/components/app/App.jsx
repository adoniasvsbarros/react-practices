import React from "react";

import "../../index.css";

import ComponentWithoutParameter from "../componentWithoutParameter/ComponentWihtoutParameter";
import ComponentWithParameter from "../componentWithParameter/ComponentWithParameter";
import Fragment from "../Fragment";
import Random from '../random/Random';

export default (_) => (
  <div id="app">
    <Random min={5} max={15} />
    <Fragment />
    <ComponentWithParameter
      title="Student Situation"
      student="Paul"
      grade={6.9}
    />
    <ComponentWithoutParameter />
  </div>
);
