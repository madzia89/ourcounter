import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'


const LoginByGoogle = (props) => (

    <div>
        <RaisedButton
            secondary={true}
            label={'Log in by google'}
            onClick={props.onLogInClick}
        />
    </div>

)

export default LoginByGoogle