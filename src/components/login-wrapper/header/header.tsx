import React from 'react'
import {Button, Select} from 'antd'
import { SwitchLanguage } from '../../switch-language'
import './style.scss'

function Header() {

    return (
        <div className="login-wrapper-header">
            <div className="logo">
                <h4>Lorem News</h4>
            </div>
            <div className="language-container">
            <span>Language: </span>
                <SwitchLanguage/>
            </div>
                
        </div>
    )
}

export default Header
