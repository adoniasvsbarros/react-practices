import React from 'react'

import './Main.css'

import Header from '../header/Header'

export default props => {
    return (
        <React.Fragment>
            <Header {...props} />
            <main className="content">
                Content
            </main>
        </React.Fragment>
    );
}