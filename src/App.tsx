import React from "react"
import {Button} from 'antd'
import { LoginWrapper } from "./components/login-wrapper"
import { LoginPage } from "./pages/login-page"
import { SignupPage } from "./pages/signup"
import { Header } from "./components/header"
import 'antd/dist/antd.css';
import DashboardPage from "./pages/dashboard/dashboard"

const App = function () {
  return (
    <div className="App">
      <DashboardPage/>
    </div>

  )
}

export default App
