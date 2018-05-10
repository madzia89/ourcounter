import React from 'react'
import {database} from '../firebase'
import Textfield from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class Chat extends React.Component {
    state = {
        name: "Magda",
        newMessage: '',
        messages: null
    }
    newMessageChangeHandler = (event, message) => {
        this.setState({
            newMessage: message
        })
    }

    addMessageToDb = () => database.ref('/chat').push({
        message: this.state.newMessage,
        user: this.state.name,
        timestamp: Date.now()
    })

    render() {
        return (
            <div>
                <h1>Tadam</h1>
                <Textfield
                    onChange={this.newMessageChangeHandler}
                    value={this.state.newMessage}
                    fullWidth={true}
                    name={'field for messages'}
                />
                <RaisedButton
                    onClick={this.addMessageToDb}
                    fullWidth={true}
                    backgroundColor={'#8BC34A'}
                    label={'Send'}
                />
            </div>

        )
    }
}

export default Chat