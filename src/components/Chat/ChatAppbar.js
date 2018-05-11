import React from 'react'
import {auth} from '../../firebase'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

const ChatAppbar = (props) =>  (
    <AppBar
        showMenuIconButton={false}
        style={{backgroundColor: '#8BC34A'}}
        iconElementRight=
            {
            <IconButton onClick={() => auth.signOut()/*tutaj wyjątkowo muszą po metodzie znaleźć się nawiasy*/}>
                <NavigationClose/>
            </IconButton>
        }
    />
)
export default ChatAppbar