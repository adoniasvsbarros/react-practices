import React from "react";

import "../../index.css";
import "./App.css";

import ComponentWithoutParameter from "../componentWithoutParameter/ComponentWihtoutParameter";
import ComponentWithParameter from "../componentWithParameter/ComponentWithParameter";
import Fragment from "../Fragment";
import Random from "../random/Random";
import Card from "../card/Card";
import Family from '../family/Family';

export default (_) => (
  <div className="App">
    <h1>React Fundamentals</h1>

    <div className="Cards">
      <Card title="#05 - Component with children">
        <Family surname="Silva" />
      </Card>

      <Card title="#04 - Random Challenge" color="#080">
        <Random min={5} max={15} />
      </Card>

      <Card title="#03 - Fragment" color="#8a72a7">
        <Fragment />
      </Card>

      <Card title="#02 - Component with parameter" color="#4bb4af">
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
