import React from 'react';
import "./ChatMessage.css";

function ChatMessage(props) {
    return (
        <div className={props.msg.received ? "chat__messageBody" : "chat__messageBody message__sent"}>
            <h4>{props.msg.name}</h4>
            <div className={props.msg.received ? "chat__message" : "chat__sent"}>
                <p>{props.msg.message}<span>timestamp</span></p>
            </div>
        </div>
    )
}

export default ChatMessage
