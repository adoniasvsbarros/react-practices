import React from "react";

import "../../index.css";

import ComponentWithoutParameter from "../componentWithoutParameter/ComponentWihtoutParameter";
import ComponentWithParameter from "../componentWithParameter/ComponentWithParameter";
import Fragment from "../Fragment";

export default (_) => (
  <div id="app">
    <Fragment />
    <ComponentWithParameter
      title="Student Situation"
      student="Paul"
      grade={6.9}
    />
    <ComponentWithoutParameter />
  </div>
);
