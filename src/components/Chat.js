import React from 'react'
import {database} from '../firebase'
import Textfield from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {mapObjectToArray} from "../utils"
import MenuItem from "material-ui/MenuItem"
import moment from "moment"

class Chat extends React.Component {
    state = {
        name: "Magda",
        newMessage: '',
        messages: []
    }

    componentDidMount() {
        //po zamontowaniu ma odświeżać się po zmianie
        database.ref('chat').on('value', (snapshot) => (
            this.setState({
                    messages: mapObjectToArray(snapshot.val()).reverse()
                }
            )
        ))
    }

    newMessageChangeHandler = (event, message) => {
        this.setState({
            newMessage: message
        })
    }

    addMessageToDb = () => {
        const newRefForMessage = database.ref('/chat').push()

        newRefForMessage.set({
            message: this.state.newMessage,
            user: this.state.name,
            timestamp: Date.now(),
            key: newRefForMessage.key 
        }).then(() => this.setState({newMessage: ""}))
    }

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
                <div>
                    {
                        !this.state.messages ?
                            <MenuItem>Ładowanie</MenuItem>
                            :
                            this.state.messages.map(element =>
                                (<MenuItem key={element.key}>
                                        <strong>{element.user} </strong>
                                        {moment(element.timestamp).format('DD-MM, h:mm:ss')} napisał: {element.message}
                                    </MenuItem>
                                ))
                    }
                </div>
            </div>

        )
    }
}

export default Chat