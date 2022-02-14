import { useState } from "react"
import React from "react";

const Form = () => {
    let [userName, setUserName] = useState("");
    let [password, setPassword] = useState("");

    return (
        <div>
            <input type="text" placeholder="Type your username here" onChange={(e) => setUserName(e.target.value)} value={userName}></input>
            <input type="password" placeholder="Type your password here" onChange={(e) => setPassword(e.target.value)} value={password}></input>
            <button>Send</button>
        </div>
    )
}

export default Form