import React from 'react'
import {Select } from 'antd'
import './style.scss'

function SwitchLanguage() {
    return (
        <div className="switch-language-container">
            <Select
        defaultValue="EN"
        className="select-language"
        bordered={false}
        showArrow={false}
        size="middle"
        dropdownMatchSelectWidth={false}
        tabIndex={0}
      >
        <Select.Option value="en" key="en">
          EN
        </Select.Option>
        <Select.Option value="fa" key="fa">
          فا
        </Select.Option>
      </Select>
        </div>
    )
}

export default SwitchLanguage
