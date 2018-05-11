import React from 'react'
import {auth, googleProvider} from '../../firebase'
import LoginByGoogle from './LoginByGoogle'
import LogInByEmailAndPassword from "./LogInByEmailAndPassword"
import PaperRefined from "../PaperRefined"
import Register from './Register'


//poniższe to klasa ponieważ będzie przechowywać stan
class LoginForms extends React.Component {
    state = {
        logInEmail: '',
        logInPassword: '',
        open: false,
        createUserEmail: '',
        createUserPassword: '',
        createUserRetypePassword: ''
    }

    loginBygoogle = () =>
        auth.signInWithPopup(googleProvider)
            .catch(e => alert('something went wrong'))

    logInByEmailAndPassword = () => auth.signInWithEmailAndPassword(
        this.state.logInEmail,
        this.state.logInPassword
    ).catch(e => alert('this is not what I expected'))

    createUserByEmailAndPassword = () => {
        if(this.state.createUserRetypePassword !== this.state.createUserPassword){
            alert('Passwords do not match')
            return
        }

        auth.createUserWithEmailAndPassword(
            this.state.createUserEmail,
            this.state.createUserPassword
        ).catch(e => alert('something went wrong'))
    }


    onEmailChange = (e, value) => {
        this.setState({logInEmail: value})
    }
    onPasswordChange = (e, value) => {
        this.setState({logInPassword: value})
    }

    onCreateUserEmailChange = (e, value) => this.setState({createUserEmail: value})
    onCreateUserPasswordChange = (e, value) => this.setState({createUserPassword: value})
    onCreateUserRetypeInPassword = (e, value) => this.setState({createUserRetypePassword: value})

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
                <Register
                    emailValue={this.state.createInEmail}
                    onEmailChange={this.onCreateUserEmailChange}
                    passwordValue={this.state.createPassword}
                    onPasswordChange={this.onCreateUserPasswordChange}
                    retypePasswordValue={this.state.createUserRetypeInPassword}
                    onRetypePasswordChange={this.onCreateUserRetypeInPassword}
                    onRegisterClick={this.createUserByEmailAndPassword}
                />
            </div>
        )
    }
}

export default LoginForms