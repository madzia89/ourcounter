import React from 'react'
import Textfield from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import PaperRefined from '../PaperRefined'


const LogInByEmailAndPassword = (props) => (

    <PaperRefined centered={true}>
        <Textfield
            name={'email'}
            type={'email'}
            placeholder={'Type your e-mail'}
            value={props.emailValue}
            onChange={props.onEmailChange}
            fullWidth={true}
        />
        <Textfield
            name={'password'}
            type={'password'}
            placeholder={'Type your password'}
            value={props.passwordValue}
            onChange={props.onPasswordChange}
            fullWidth={true}
        />
        <RaisedButton
            label={'Login'}
            onClick={props.onLogInClick}
        />

    </PaperRefined>
)

export default LogInByEmailAndPassword