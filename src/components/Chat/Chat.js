import React from 'react'
import {auth, database} from '../../firebase'
import Textfield from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {mapObjectToArray} from "../../utils"
import MenuItem from "material-ui/MenuItem"
import ChatAppbar from './ChatAppbar'
import Message from './Message'
import PaperRedefined from '../PaperRefined'


class Chat extends React.Component {
    state = {
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
            user: auth.currentUser.displayName,
            email: auth.currentUser.email,
            avatar: auth.currentUser.photoURL,
            timestamp: Date.now(),
            key: newRefForMessage.key
        }).then(() => this.setState({newMessage: ""}))
    }

    render() {
        return (
            <div>
                <ChatAppbar/>
                <h1>Tadam</h1>
                <PaperRedefined centered={true}>
                <Textfield
                    onChange={this.newMessageChangeHandler}
                    value={this.state.newMessage}
                    fullWidth={true}
                    name={'field for messages'}
                    onKeyPress={(ev) => {
                        if ((ev.key === 'Enter') && (this.state.newMessage !== '')) {
                            this.addMessageToDb()
                        }
                    }}
                />

                <RaisedButton
                    onClick={() => {
                        if (this.state.newMessage !== '') {
                            this.addMessageToDb()
                        }
                    }}
                    fullWidth={true}
                    backgroundColor={'#8BC34A'}
                    label={'Send'}
                />
                </PaperRedefined>
                <PaperRedefined>
                    {
                        !this.state.messages ?
                            <MenuItem>Ładowanie</MenuItem>
                            :
                            this.state.messages.map(element =>
                                (<Message
                                        key={element.key}
                                        element={element} //tutaj przekazujemy propsa do message.js
                                    />
                                ))
                    }
                </PaperRedefined>
            </div>

        )
    }
}

export default Chat