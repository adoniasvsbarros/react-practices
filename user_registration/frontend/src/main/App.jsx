import React from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Footer from '../components/template/footer/Footer'
import Nav from '../components/template/nav/Nav'
import Main from '../components/template/main/Main'
import Logo from '../components/template/logo/Logo'


export default props => {
    return (
        <div className="app">
            <Logo />
            <Nav />
            <Main icon="home" title="Home" subtitle="Welcome to the user registration project!!"/>
            <Footer />
        </div>
    );
}