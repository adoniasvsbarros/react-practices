import React from "react";

import "../../index.css";
import "./App.css";

import ComponentWithoutParameter from "../componentWithoutParameter/ComponentWihtoutParameter";
import ComponentWithParameter from "../componentWithParameter/ComponentWithParameter";
import Fragment from "../Fragment";
import Random from "../random/Random";
import Card from "../card/Card";
import Family from '../family/Family';
import FamilyMember from '../family-member/FamilyMember';
import StudentList from '../repetition/StudentList';
import ProductTable from '../repetition/ProductTable';
import EvenOrOdd from '../conditional/EvenOrOdd';
import UserInfo from '../conditional/UserInfo';
import DirectFather from '../directCommunication/directFather';
import IndirectFather from '../indirectCommunication/indirectFather';
import Input from '../form/input';


export default (_) => (
  <div className="App">
    <h1>React Fundamentals</h1>

    <div className="Cards">
      <Card title="#11 - Controlled Component" color="#808">
        <Input />
      </Card>
      <Card title="#10 - Indirect Communication" color="#009">
        <IndirectFather />
      </Card>
      <Card title="#09 - Direct Communication" color="#591">
        <DirectFather />
      </Card>

      <Card title="#08 - Conditional Renderization 1" color="#222">
        <EvenOrOdd number={20}/>
        <UserInfo user={{name: 'Fred'}}/>
      </Card>

      <Card title="#07 - Repetition 2" color="#555">
        <ProductTable />
      </Card>

      <Card title="#06 - Repetition" color="#285">
        <StudentList />
      </Card>

      <Card title="#05 - Component with children">
        <Family surname="Ferreira">
          <FamilyMember name="Pedro"/>
          <FamilyMember name="Ana"/>
          <FamilyMember name="Carol"/>
        </Family>
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
