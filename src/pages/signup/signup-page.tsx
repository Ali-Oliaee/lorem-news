import React from 'react'
import {Form, Input,Divider, Button} from 'antd'
import { LoginWrapper } from '../../components/login-wrapper'
import { Logo } from '../../components/logo'
import { GoogleButton } from '../../components/google-button'
import './style.scss'

function SignupPage() {
    return (
        <LoginWrapper>
                <div className="signup-form-container">
                <Logo/>
               <h5 className="signup-description">Sign up and <br /> connect <br /> to the world</h5>
               <section>
              <GoogleButton/>
               <Divider>or</Divider>
                <Form className="signup-form" onFinish={() => console.log('ckdjsn') }
                    name="signup-form"
                >
                <Form.Item className="input-container" name="username"
                rules={[{
                    required: true,
                    message:'this field is required'
                }]}
                >
                    <Input placeholder="username" className="username-input"/>
                </Form.Item>
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
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') !== value) 
                      return Promise.reject(new Error('Two passwords does not match'));
                    },
                  }),
                ]}
                >
                    <Input.Password placeholder="confirm password" className="password-input"/>
                </Form.Item>
                <a href="#" className="forgot-password">forot your password?</a>
                <Button htmlType="submit" block className="submit-button" size="large">
                    Sign Up
                </Button>
                </Form>
                <p className="login-link">Already have an account?
                    <a href="./login" >login</a>
                </p>
                </section>
           </div>
        </LoginWrapper>
    )
}

export default SignupPage
