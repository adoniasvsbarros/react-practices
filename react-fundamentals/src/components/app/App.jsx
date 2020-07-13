import React from "react";

import "../../index.css";
import "./App.css";

import ComponentWithoutParameter from "../componentWithoutParameter/ComponentWihtoutParameter";
import ComponentWithParameter from "../componentWithParameter/ComponentWithParameter";
import Fragment from "../Fragment";
import Random from "../random/Random";
import Card from "../card/Card";

export default (_) => (
  <div className="App">
    <h1>React Fundamentals</h1>

    <div className="Cards">
      <Card title="#04 - Random Challenge">
        <Random min={5} max={15} />
      </Card>

      <Card title="#03 - Fragment">
        <Fragment />
      </Card>

      <Card title="#02 - Component with parameter">
        <ComponentWithParameter
          title="Student Situation"
          student="Paul"
          grade={6.9}
        />
      </Card>

      <Card title="#01 - Component without Parameter">
        <ComponentWithoutParameter />
      </Card>
    </div>
  </div>
);
