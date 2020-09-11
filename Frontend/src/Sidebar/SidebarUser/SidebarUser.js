import React from 'react';
import "./SidebarUser.css";
import { Avatar } from "@material-ui/core";


function SidebarUser(props) {
    return (
        <div className="sidebar__chatComponent">
            <Avatar src={props.img}/>
            <div className="sidebar__chatInfo">
                <h4>{props.name}</h4>
                <p>Hey, I'm using whatsapp!</p>
            </div>
        </div>
    )
}

export default SidebarUser
