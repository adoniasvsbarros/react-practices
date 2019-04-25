import React from 'react'
import { childrenWithProps } from '../utils/utils'

export default props =>
    <div>
        <h1>Family</h1> 
        {childrenWithProps(props)}
        {/*props.children*/}
    </div>