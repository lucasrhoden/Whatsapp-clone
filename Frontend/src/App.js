import React, { useEffect, useState } from 'react';
import Pusher from "pusher-js";
import './App.css';
import axios from "./axios.js";
import Sidebar from "./Sidebar/Sidebar";
import Chat from "./Chat/Chat";

function App() {
  const [messages, setMessages] = useState([]);

  // useEffect to set data from db
  useEffect(() => {
    axios.get("/messages/sync")
      .then(response => {
        setMessages(response.data)
      })
      .catch(err => console.log(err));
  }, []);

  // useEffect to fetch Pusher sync
  useEffect(() => {
    const pusher = new Pusher('f7c2a5074698e8f62aac', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('message');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])

  return (
    <div className="app">
      <div className="app__root">
        <Sidebar />
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
