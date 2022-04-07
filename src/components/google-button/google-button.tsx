import React from 'react'
import {ReactComponent as GoogleIcon } from '../../assets/icons/google-logo.svg'
import {Button } from 'antd'
import './style.scss'


function GoogleButton() {
    return (
        <>
            <Button className="google-button" size='large'>
            <GoogleIcon/>
                Sign up with Google account
            </Button>
        </>
    )
}

export default GoogleButton
