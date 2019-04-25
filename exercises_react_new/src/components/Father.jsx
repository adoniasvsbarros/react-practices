// Indirect communication between components
import React from 'react'
import Son from './Son'

export default props => {
    const acceptExitSon = 
        place => alert(`You can go to the ${place}`)

    const denyExitSon =
        place => alert(`You can't go to the ${place}`)

    return(
        <div>
            <Son notifyExit={denyExitSon} />
        </div>
    )
}