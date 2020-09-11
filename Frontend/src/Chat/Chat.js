import React, { useState } from 'react';
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import "./Chat.css";
import axios from "../axios";

import ChatMessage from "./ChatMessage/ChatMessage";

function Chat(props) {
    const [input, setInput] = useState("")

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
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjGtutLYxsJ-2f2V-i13RlP_L603yh2-g9WA&usqp=CAU"/>
                    <div className="chat__headerLeftInfo">
                        <h4>Fury</h4>
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
                {props.messages.map(msg => (
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
