import React from 'react'
import ReactDOM from 'react-dom'
import FirstComponent from './components/FirstComponent'
import {CompA, CompB as B} from './components/TwoComponents'
import MultiElements from './components/MultiElements'

const element = document.getElementById('root')

ReactDOM.render(
    <div>
        <MultiElements />
        {/*
        <CompA value="Hi I'm A!"/>
        <B value="Hi I'm A!"/>
        <FirstComponent value="I'm a component with a prop!"/>
        */}
    </div>
    , element)


// const jsx = <h1>Hello react!</h1>