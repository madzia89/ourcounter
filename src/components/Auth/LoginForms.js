import React from 'react'
import {auth, googleProvider} from '../../firebase'
import LoginByGoogle from './LoginByGoogle'
import LogInByEmailAndPassword from "./LogInByEmailAndPassword"
import PaperRefined from "../PaperRefined";


//poniższe to klasa ponieważ będzie przechowywać stan
class LoginForms extends React.Component {
    state = {
        logInEmail: '',
        logInPassword: ''
    }

    loginBygoogle = () => {
        auth.signInWithPopup(googleProvider)
    }

    logInByEmailAndPassword = () => auth.signInWithEmailAndPassword(
        this.state.logInEmail,
        this.state.logInPassword
    )

    onEmailChange = (event, value) => {this.setState({logInEmail: value})}
    onPasswordChange = (event, value) => {this.setState({logInPassword: value})}

    render() {
        return (
            <div>
                <LogInByEmailAndPassword
                    emailValue={this.state.logInEmail}
                    onEmailChange={this.onEmailChange}
                    passwordValue={this.state.logInPassword}
                    onPasswordChange={this.onPasswordChange}
                    onLogInClick={this.logInByEmailAndPassword}
                />
                <PaperRefined centered={true}>
                    <LoginByGoogle
                        onLogInClick={this.loginBygoogle}
                    />
                </PaperRefined>
            </div>
        )
    }
}

export default LoginForms