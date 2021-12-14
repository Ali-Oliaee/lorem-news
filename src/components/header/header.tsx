import React from 'react'
import { Input, Dropdown, Menu } from 'antd'
import { SwitchLanguage } from '../switch-language'
import './style.scss'

const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="#">Dashboard</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">News</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="#">Log out</a>
      </Menu.Item>
    </Menu>
  );

function Header() {
    return (
        <div className="dashboard-header">
          <div className="header-search-container">
            <Input.Search className="header-search-input" placeholder="search news"/>
          </div>
            <div className="header-profile-dropdown">
            <SwitchLanguage/>
                <Dropdown overlay={menu} trigger={['click']}>
                    <a className="ant-dropdown-link">
                        menu
                    </a>        
                </Dropdown>
            </div>
        </div>
    )
}

export default Header
