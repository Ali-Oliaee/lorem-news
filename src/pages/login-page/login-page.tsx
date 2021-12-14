import {Button, Form, Input} from 'antd'
import React from 'react'
import { LoginWrapper } from '../../components/login-wrapper'
import './style.scss'

function LoginPage() {
    return (
       <LoginWrapper>
           <section className="login-form-container">
               <h5>Login Form</h5>
                <Form className="login-form">
                <Form.Item className="input-container">
                    <Input placeholder="email"/>
                </Form.Item>
                <Form.Item className="input-container">
                    <Input.Password placeholder="password"/>
                </Form.Item>
                <a href="#">forot your passwor?</a>
                <Button htmlType="submit" className="submit-button" size="large">
                    Login
                </Button>
                </Form>
                <a href="./signup" className="signup-link">signup</a>
           </section>
       </LoginWrapper>
    )
}

export default LoginPage
