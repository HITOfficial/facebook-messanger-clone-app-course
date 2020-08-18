import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState ([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt('enter Your Name'));
  }, [])

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id,
                                              message: doc.data() })))  // i give every OBJECT data from DB to message var                                  
    });
  }, [] )

  const sendMessage = (event) => {
    event.preventDefault(); // removing refreshing of page fron HTML form

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

      setMessages([...messages, 
        {
          username: username,
          text: input
        }
      ]);
      setInput('');
  }

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=200&h=200"></img>
      <h1>Facebook Messenger App Clone</h1>
    <h2>Welcome {username}</h2>
      <form className="app__form">
        <FormControl className ="app__formControl">
          <Input className="app__input" placeholder="enter a message..." value={input} onChange={event => setInput(event.target.value)}/>
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

    <FlipMove>
    {
      messages.map(({ message, id }) => (
        <Message key={id} username={username} message={message}/>
      ))
    }
    </FlipMove>

    </div>
  );
}

export default App;
