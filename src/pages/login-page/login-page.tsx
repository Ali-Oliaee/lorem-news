import {Button, Form, Input} from 'antd'
import React from 'react'
import { LoginWrapper } from '../../components/login-wrapper'
import './style.scss'

function LoginPage() {
    return (
       <LoginWrapper>
           <Form className="login-form">
            <Form.Item className="input-container">
                <Input placeholder="email"/>
            </Form.Item>
            <Form.Item className="input-container">
                <Input.Password placeholder="password"/>
            </Form.Item>
            <Button htmlType="submit" className="submit-button" size="large">
                Login
            </Button>
           </Form>
       </LoginWrapper>
    )
}

export default LoginPage
