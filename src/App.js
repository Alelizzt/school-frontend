import "./App.css";
import React from "react";

import Student from "./components/Student";
import Appbar from "./components/Appbar";

function App() {
    return (
        <div className="App">
            <Appbar />
            <Student />
        </div>
    );
}

export default App;
