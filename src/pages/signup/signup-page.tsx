import React from 'react'
import {Form, Input, Button} from 'antd'
import { LoginWrapper } from '../../components/login-wrapper'
import './style.scss'

function SignupPage() {
    return (
        <LoginWrapper>
             <section className="signup-form-container">
               <h5>Signup Form</h5>
                <Form className="signup-form" onFinish={() => console.log('ckdjsn')
                }>
                <Form.Item className="input-container" >
                    <Input placeholder="username"/>
                </Form.Item>
                <Form.Item className="input-container" rules={[
                {
                    required:true,
                    message: 'This field is required!'
                },
                {
                    type: 'email',
                    message:'Enter a valid email'
                }]}>
                    <Input placeholder="email"/>
                </Form.Item>
                <Form.Item className="input-container">
                    <Input.Password placeholder="password"/>
                </Form.Item>
                <Form.Item className="input-container">
                    <Input.Password placeholder="confirm password"/>
                </Form.Item>
                <a href="#">forot your passwor?</a>
                <Button htmlType="submit" block className="submit-button" size="large">
                    Signup
                </Button>
                </Form>
                <a href="./login" className="login-link">login</a>
           </section>
        </LoginWrapper>
    )
}

export default SignupPage
