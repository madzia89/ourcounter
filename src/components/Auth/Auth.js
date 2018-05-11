import React from 'react'
import {auth} from '../../firebase'
import LoginForms from './LoginForms'

class Auth extends React.Component {
    state = {
        isLoggedIn: false
    }

    componentDidMount() {
        auth.onAuthStateChanged(
            user => {
                if (user) {
                    this.setState({isLoggedIn: true})
                } else {
                    this.setState({isLoggedIn: false})
                }
            }
        )
    }

    render() {
        return (
            <div>
                {//jeśli użytkownik jest zalogowany chcemy wyświetlić childreny
                    this.state.isLoggedIn ?
                        this.props.children //w tej chili jest to Chat ponieważ w komponencie App wew. <Auth> jest <Chat>
                        :
                        <LoginForms/>
                }
            </div>
        )
    }
}

export default Auth