import React from 'react'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import PaperRefined from '../PaperRefined'


const Register = (props) => (

    <PaperRefined centered={true}>
        <h3>Register new user</h3>
        <TextField
            name={'email'}
            type={'email'}
            placeholder={'Type your e-mail'}
            value={props.emailValue}
            onChange={props.onEmailChange}
            fullWidth={true}
        />
        <TextField
            name={'password'}
            type={'password'}
            placeholder={'Type your password'}
            value={props.passwordValue}
            onChange={props.onPasswordChange}
            fullWidth={true}
        />
        <TextField
            name={'retypePassword'}
            type={'retypePassword'}
            placeholder={'Retype your password'}
            value={props.retypePasswordValue}
            onChange={props.onRetypePasswordChange}
            fullWidth={true}
        />
        <RaisedButton
            label={'Login'}
            onClick={props.onRegisterClick}
        />

    </PaperRefined>
)

export default Register