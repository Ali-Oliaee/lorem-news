import React from 'react'
import {Header} from './header'
import {Footer} from './footer'
import './style.scss'

function LoginWrapper({children}: any) {
    return (
        <div className="login-wrapper">
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default LoginWrapper
