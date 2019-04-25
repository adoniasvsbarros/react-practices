import React from 'react'

const approveds = ['Paula', 'Roberta', 'Caio', 'Pedro']

export default props => {
    const generateItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {generateItens(approveds)}
        </ul>
    )
}