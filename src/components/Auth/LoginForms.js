import React from 'react'
import {auth, googleProvider} from '../../firebase'
import LoginByGoogle from './LoginByGoogle'


//poniższe to klasa ponieważ będzie przechowywać stan
class LoginForms extends React.Component {

    loginBygoogle = () => {auth.signInWithPopup(googleProvider)}

    render() {
        return (
            <div>
                <LoginByGoogle
                    onLogInClick={this.loginBygoogle}
                />
            </div>
        )
    }
}

export default LoginForms