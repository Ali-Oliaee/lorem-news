import React from 'react'
import {Button, Form, Input, Divider} from 'antd'
import { LoginWrapper } from '../../components/login-wrapper'
import { Logo } from '../../components/logo'
import { GoogleButton } from '../../components/google-button'
import './style.scss'

function LoginPage() {
    return ( 
        <LoginWrapper>
        <div className="login-form-container">
        <Logo/>
       <h5 className="login-description">Login and <br /> connect <br /> to the world</h5>
       <section>
      <GoogleButton/>
       <Divider>or</Divider>
        <Form className="login-form" onFinish={() => console.log('ckdjsn') }
            name="login-form" >
        <Form.Item className="input-container"
        name="email"
        rules={[
        {
            required:true,
            message: 'This field is required!'
        },
        {
            type: 'email',
            message:'Enter a valid email'
        }]}>
            <Input placeholder="email" className="email-input"/>
        </Form.Item>
        <Form.Item className="input-container" name="password" rules={[{
            required:true,
            message:'This field is required'
        },
        {
            min: 8,
            message: 'Enter 8 charcters'
        }
        ]}>
            <Input.Password placeholder="password" className="password-input"/>
        </Form.Item>
        <a href="#" className="forgot-password">forot your password?</a>
        <Button htmlType="submit" block className="submit-button" size="large">
            Sign Up
        </Button>
        </Form>
        <p className="signup-link">Dont have account?
            <a href="./signup" >Sign up</a>
        </p>
        </section>
   </div>
</LoginWrapper>
    )
}

export default LoginPage
