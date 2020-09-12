import React, { useEffect, useState } from 'react';
import Pusher from "pusher-js";
import { useParams } from "react-router-dom"
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

import "./Chat.css";
import axios from "../axios";
import db from "../firebase";

import ChatMessage from "./ChatMessage/ChatMessage";

function Chat() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [roomHeader, setRoomHeader] = useState("");
    const { roomId } = useParams();

    // useEffect to set headerChat from firebase
    useEffect(() => {
        if (roomId) {
            db.collection("rooms").onSnapshot(snapshot => {
                setRoomHeader(snapshot.docs.map(doc => {
                    const newData = doc.data();
                    const newUser = {
                        id: doc.id,
                        name: newData.name,
                        img: newData.img
                    }
                        return newUser;
                }).find(el => el.name === roomId))
            })
        }
    }, [roomId])

    console.log(roomHeader)
  
    // useEffect to set message body from mongoDB
    useEffect(() => {
        const refRoomId = roomId.replaceAll(" ","%20")
        axios.get(`/messages/sync/${refRoomId}`)
            .then(response => {
              setMessages(response.data)
            })
            .catch(err => console.log(err));
    }, [roomId]);
  
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

    // axios to post a new message on mongoDB
    const sendMessage = async event => {
        event.preventDefault();
        await axios.post("/messages/new", {
            message: input,
            name: "You",
            timestamp: "without",
            received: false
        }).catch(err => console.log(err));

        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat___headerLeft">
                    <Avatar src={roomHeader.img}/>
                    <div className="chat__headerLeftInfo">
                        <h4>{roomHeader.name}</h4>
                        <p>Let's chat</p>
                    </div>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map(msg => (
                    <ChatMessage key={msg._id} msg={msg}/>
                ))}
            </div>
            <div className="chat__ctrl">
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <div className="chat__ctrlMessage">
                    <form>
                        <input onChange={e => setInput(e.target.value)} value={input} placeholder="Type a message"/>
                        <button onClick={sendMessage} type="submit" />
                    </form>
                </div>
                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
