import React from 'react'
import ReactDOM from 'react-dom'
//import FirstComponent from './components/FirstComponent'
//import {CompA, CompB as B} from './components/TwoComponents'
//import MultiElements from './components/MultiElements'
//import SilvaFamily from './components/SilvaFamily'
import Family from './components/Family'
import Member from './components/Member'

const element = document.getElementById('root')

ReactDOM.render(
    <div>
        <Family surname="Touch">
            <Member name="Caio"  />
        </Family>
        {/*<SilvaFamily/>*/}
        {/*<MultiElements />*/}
        {/*<CompA value="Hi I'm A!"/>
        <B value="Hi I'm A!"/>*/}
        {/*<FirstComponent value="I'm a component with a prop!"/>*/}
    </div>
    , element)


// const jsx = <h1>Hello react!</h1>