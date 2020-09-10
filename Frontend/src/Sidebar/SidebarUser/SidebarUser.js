import React from 'react';
import "./SidebarUser.css";
import { Avatar } from "@material-ui/core";


function SidebarUser() {
    return (
        <div className="sidebar__chatComponent">
            <Avatar />
            <div className="sidebar__chatInfo">
                <h4>Name</h4>
                <p>Message</p>
            </div>
        </div>
    )
}

export default SidebarUser
