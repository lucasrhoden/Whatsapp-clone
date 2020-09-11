import React, { useState, useEffect } from 'react';
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import db from "../firebase";
import "./Sidebar.css";

import SidebarUser from "./SidebarUser/SidebarUser";

function Sidebar() {

    const [users, setUsers] = useState([]);

    // Connecting personas from firestore
    useEffect(() => {
        db.collection("rooms").onSnapshot(snapshot => {
            setUsers(snapshot.docs.map(doc => {
                const newData = doc.data();
                const newUser = {
                    id: doc.id,
                    name: newData.name,
                    img: newData.img
                }
                    return newUser;
            }))
        })
    }, [])

    const createChat = () => {
        const newRoom = prompt("What is your chat name?");

        if (newRoom) {
            db.collection("rooms").add({name: newRoom})
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__headerLeft">
                    <Avatar alt="profile__avatar" src="data:image/jpeg;base64,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"/>
                </div>
                <div className="sidebar___headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchField">
                    <IconButton size="small">
                        <SearchIcon fontSize="small" />
                    </IconButton>
                    <input placeholder="Search or start a new chat"/>
                </div>
            </div>
            <div className="sidebar__chat">
                <div className="sidebar__newchat" onClick={createChat}>
                    <h2>start new chat</h2>
                </div>
                {users.map(user => (
                    <SidebarUser key={user.id} id={user.id} name={user.name} img={user.img}/>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
