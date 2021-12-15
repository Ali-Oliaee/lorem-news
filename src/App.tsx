import React from "react"
import {Button} from 'antd'
import { LoginWrapper } from "./components/login-wrapper"
import { LoginPage } from "./pages/login"
import { SignupPage } from "./pages/signup"
import { Header } from "./components/header"
import DashboardPage from "./pages/dashboard/dashboard"
import 'antd/dist/antd.css';
import { NewsPage } from "./pages/news"

const App = () => {
  return (
    <div className="App">
      <LoginPage/> 
      <SignupPage/>
      <DashboardPage/>
      <NewsPage/>
    </div>

  )
}

export default App
