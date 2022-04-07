import React from 'react'
import {Button, Form, Input, Divider} from 'antd'
import { LoginWrapper } from '../../components/login-wrapper'
import { Logo } from '../../components/logo'
import { GoogleButton } from '../../components/google-button'
import { Link, useNavigate } from 'react-router-dom'
import './style.scss'

function LoginPage() {
    const navigate = useNavigate()
    const login = (email: any, password : any) => {
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
        navigate('/news')
    }

    return ( 
        <LoginWrapper>
            <div className="login-form-container">
                <Logo/>
                <h5 className="login-description">Login and <br /> connect <br /> to the world</h5>
                <section>
                    <GoogleButton/>
                    <Divider>or</Divider>
                    <Form className="login-form" onFinish={(values) => login(values.email, values.password) }
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
                        <Form.Item className="input-container" name="password" 
                            rules={[{
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
                        <Link to="/notfound" className="forgot-password">forot your password?</Link>
                        <Button htmlType="submit" block className="submit-button" size="large">
                            Login
                        </Button>
                    </Form>
                    <p className="signup-link">Dont have account?
                        <Link to="/signup">signup</Link>
                    </p>
                </section>
            </div>
        </LoginWrapper>
    )
}

export default LoginPage
