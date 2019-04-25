// Indirect communication between components
import React from 'react'

export default props => 
    <div>
        <button 
            onClick={() => props.notifyExit('Shopping mall')}>
            I'm going out
        </button>
    </div>
