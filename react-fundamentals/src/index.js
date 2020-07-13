import ReactDOM from 'react-dom';
import React from 'react';

import './index.css'

import ComponentWithoutParameter from './components/componentWithoutParameter/ComponentWihtoutParameter';
import ComponentWithParameter from './components/componentWithParameter/ComponentWithParameter';
import Fragment from './components/Fragment';


ReactDOM.render(
    <div id="app">
        <ComponentWithoutParameter />
        <ComponentWithParameter 
            title="Student Situation" 
            student="Paul" grade={6.9} />
        <Fragment />
    </div>,
    document.getElementById("root")
);