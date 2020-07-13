import React from 'react';

export default function First() {
    const msg = "I\'m a component without parameters!";

    return (
        <div>
            <h2>Component Without Parameter</h2>
            <p>{ msg }</p>
        </div>
    );
}

