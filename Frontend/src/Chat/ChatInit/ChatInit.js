import { Avatar } from '@material-ui/core';
import React from 'react';
import "./ChatInit.css";

function ChatInit() {
    return (
        <div className="chatInit">
            <Avatar src="" />
            <div className="chatInit__body">
                <h4>welcome</h4>
                <p>to</p>
                <h3>WhatsappClone app!</h3>
                <p>Please select a room to chat with our heroes</p>
            </div>
            <div className="chatInit__rights">
                <i class="fas fa-meteor"></i>
                <p>by Lucas Rhoden</p>
            </div>
        </div>
    )
}

export default ChatInit
