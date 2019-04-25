import React, { useState, useEffect } from 'react'


export default props => {
    const [counter, setCounter] = useState(2)
    const [status, setEvenOrOdd] = useState('Even')

    useEffect(() => {
        counter % 2 == 0 ? setEvenOrOdd('Even') : setEvenOrOdd('Odd')
    })
    return (
        <div>
            <h1>{counter} - {status}</h1>
            <button 
                onClick={() => setCounter(counter+1)}>
                Inc
            </button>
            <button 
                onClick={() => setCounter(counter-1)}>
                Dec
            </button>
        </div>
    )
}