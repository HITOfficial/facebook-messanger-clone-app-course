import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';
const Message = forwardRef(({ key, message, username }, ref) =>  {
    const isUser = username === message.username;

    isUser ? console.log('yes he is') : console.log('not now');

    return (
        <div ref={ref} className={`message ${isUser ? 'message__user' : ''}`}>
            <Card className={isUser ? 'message__userCard' : 'message__guestCard'}>
                <CardContent>
                    <Typography
                        color="white"
                        variant="h5"
                        component="h2"
                    >
                        { !isUser && `${message.username || 'Unnown User'}: ` /* if  is not isUser then print message.username otherwise Unnown User */}
                        {message.message}
                    </Typography>
                </CardContent>
            </Card> 
        </div>
    )
})

export default Message
