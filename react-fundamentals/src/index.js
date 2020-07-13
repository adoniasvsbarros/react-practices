import ReactDOM from 'react-dom';
import React from 'react';

import './index.css'

import ComponentWithoutParameter from './components/componentWithoutParameter/ComponentWihtoutParameter';
import ComponentWithParameter from './components/componentWithParameter/ComponentWithParameter';


ReactDOM.render(
    <div id="app">
        <ComponentWithoutParameter />,
        <ComponentWithParameter 
            title="Student Situation" 
            student="Paul" grade={6.9}/>
        <ComponentWithParameter 
            title="Student Situation" 
            student="Maria" grade={9.9}/>
    </div>,
    document.getElementById("root")
);