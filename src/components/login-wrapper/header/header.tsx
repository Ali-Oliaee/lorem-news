import React from 'react'
import {Button, Select} from 'antd'
import './style.scss'

function Header() {
    const {Option} = Select

    return (
        <div className="login-wrapper-header">
            <div className="logo">
                <h4>Lorem News</h4>
            </div>
            <div className="language-container" >
            
                <Select defaultValue="EN" className="language-select">
                    <Option value="en">EN</Option>
                    <Option value="fa">فا</Option>
                </Select>
                
            </div>
        </div>
    )
}

export default Header
