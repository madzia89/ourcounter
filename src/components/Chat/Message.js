import React from 'react'
import moment from "moment/moment";
import MenuItem from "material-ui/MenuItem"

const Message = ({element}) => (

        <MenuItem key={element.key}>
            <strong>{element.user} </strong>
            {moment(element.timestamp).format('DD-MM, h:mm:ss')} napisał: {element.message}
        </MenuItem>
)

export default Message