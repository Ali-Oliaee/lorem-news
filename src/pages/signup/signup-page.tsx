import React from 'react'
import {Form, Input,Divider, Button} from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { LoginWrapper } from '../../components/login-wrapper'
import { Logo } from '../../components/logo'
import { GoogleButton } from '../../components/google-button'
import './style.scss'

function SignupPage() {
    const navigate = useNavigate()
    const signup = (email: any, password : any) => {
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
        navigate('/profile')
    }

    return (
        <LoginWrapper>
                <div className="signup-form-container">
                <Logo/>
               <h5 className="signup-description">Sign up and <br /> connect <br /> to the world</h5>
               <section>
              <GoogleButton/>
               <Divider>or</Divider>
                <Form className="signup-form" onFinish={(values) =>  signup(values.email, values.password)}
                    name="signup-form"
                >
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
                <Form.Item className="input-container"  name="confirm-password" 
                dependencies={["password"]}
                rules={[{
                    required:true,
                    message:'This field is required'
                },
                {
                    min: 8,
                    message: 'Enter 8 charcters'
                }]}
                >
                    <Input.Password placeholder="confirm password" className="password-input"/>
                </Form.Item>
                <Button htmlType="submit" block className="submit-button" size="large">
                    Sign Up
                </Button>
                </Form>
                <p className="login-link">Already have an account?
                    <Link to="/">Login</Link>
                </p>
                </section>
           </div>
        </LoginWrapper>
    )
}

export default SignupPage
