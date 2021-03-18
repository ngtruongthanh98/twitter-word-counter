import "./App.css";
import React from "react";
import Slidebar from "./components/Slidebar/Slidebar"
import Feed from "./components/Feed/Feed"
import Widgets from "./components/Widgets/Widgets"

function App() {
    return (
        <div className="app">
            <h1>Twitter</h1>
            <Slidebar/>
            <Widgets/>

        </div>
    );
}

export default App;
