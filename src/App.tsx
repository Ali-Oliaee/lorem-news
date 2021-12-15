import React from "react"
import {Button} from 'antd'
import { LoginWrapper } from "./components/login-wrapper"
import { LoginPage } from "./pages/login-page"
import { SignupPage } from "./pages/signup"
import { Header } from "./components/header"
import DashboardPage from "./pages/dashboard/dashboard"
import 'antd/dist/antd.css';

const App = () => {
  return (
    <div className="App">
      {/* <LoginPage/> */}
      {/* <SignupPage/> */}
      <DashboardPage/>
    </div>

  )
}

export default App
