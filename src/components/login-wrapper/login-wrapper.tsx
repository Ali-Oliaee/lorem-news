import React from 'react'
import {Header} from './header'
import {Footer} from './footer'
import './style.scss'

function LoginWrapper({children}: any) {
    return (
        <div className="login-wrapper">
            <div className="background"></div>
            <div className="login-wrapper-content">
                <Header/>
                {children}
                <Footer/>
            </div>
        </div>
    )
}

export default LoginWrapper
