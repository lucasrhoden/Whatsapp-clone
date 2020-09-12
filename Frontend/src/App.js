import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Sidebar from "./Sidebar/Sidebar";
import Chat from "./Chat/Chat";
import ChatInit from "./Chat/ChatInit/ChatInit"

function App() {
  return (
    <Router>
        <div className="app">
          <div className="app__root">
            <Sidebar />
            <Switch>
              <Route path="/" exact>
                <ChatInit />
              </Route>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
            </Switch>
          </div>
        </div>
    </Router>
  );
}

export default App;
