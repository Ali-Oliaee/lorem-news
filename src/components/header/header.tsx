import React from 'react'
import { Button, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import './style.scss'

function Header() {
  const navigate = useNavigate()
  return (
    <div className="dashboard-header">
      <div className="header-search-container">
        <Input.Search className="header-search-input" placeholder="search news" />
      </div>
      <div className="header-profile-dropdown">
        <Button onClick={() => {
            localStorage.clear()
            navigate('/')
          }}>
            Logout
        </Button>
      </div>
    </div>
  )
}

export default Header
