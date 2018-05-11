import React from 'react'
import moment from "moment/moment"
import Avatar from 'material-ui/Avatar'
import {ListItem} from 'material-ui/List'
import {darkBlack} from 'material-ui/styles/colors'
import ChatIcon from 'material-ui/svg-icons/communication/chat'


const Message = ({element}) => (
    <div>
        <ListItem
            leftAvatar={
                <Avatar
                    src={element.avatar}
                    icon={<ChatIcon/>}
                />
            }
        primaryText={element.user || element.email}
            secondaryText={
                <p>
                    <span style={{color: darkBlack}}>
                        {moment(element.timestamp)
                            .format('DD/MM/YY HH:mm')}
                    </span>napisał -- {element.message}
                </p>
            }
            secondaryTextLines={2}
            />
    </div>
)

export default Message