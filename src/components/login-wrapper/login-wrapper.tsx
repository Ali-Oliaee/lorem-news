import React from 'react'
import './style.scss'

function LoginWrapper({children}: any) {
    return (
        <div className="login-wrapper">
            {children}
        </div>
    )
}

export default LoginWrapper
