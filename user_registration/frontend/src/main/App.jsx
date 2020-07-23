import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Routes from './Routes'
import Logo from '../components/template/logo/Logo'
import Nav from '../components/template/nav/Nav'
import Footer from '../components/template/footer/Footer'

export default props => {
    return (
        <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
        </BrowserRouter>
    );
}