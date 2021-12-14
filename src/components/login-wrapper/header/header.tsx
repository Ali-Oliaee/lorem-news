import React from 'react'
import {Button, Select} from 'antd'
import './style.scss'

function Header() {

    return (
        <div className="login-wrapper-header">
            <div className="logo">
                <h4>Lorem News</h4>
            </div>
            <div className="language-container">
            <span>Language: </span>
                <Select defaultValue="EN" className="language-select"  bordered={false}
                showArrow={false}
                dropdownMatchSelectWidth={false}
                style={{width: 80}}
                >
                    <Select.Option value="en" key="en">EN</Select.Option>
                    <Select.Option value="fa" key="fa">fa</Select.Option>
                </Select>
            </div>
                
        </div>
    )
}

export default Header
