import React from 'react'
import { Input, Dropdown, Menu } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { SwitchLanguage } from '../switch-language'
import './style.scss'


const menu = (navigate: any) => {
  return (
    <Menu>
      <Menu.Item key="0">
        <Link to="/profile">dashboard</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/news">News</Link>
      </Menu.Item>
      <Menu.Item key="2" onClick={() => {
        localStorage.clear()
        navigate('/auth/login')
      }}>
        Logout
      </Menu.Item>
    </Menu>
  )
};

function Header() {
  const navigate = useNavigate()
  return (
    <div className="dashboard-header">
      <div className="header-search-container">
        <Input.Search className="header-search-input" placeholder="search news" />
      </div>
      <div className="header-profile-dropdown">
        <SwitchLanguage />
        <Dropdown overlay={() => menu(navigate)} trigger={['click']}>
          <a className="ant-dropdown-link">
            menu
          </a>
        </Dropdown>
      </div>
    </div>
  )
}

export default Header
