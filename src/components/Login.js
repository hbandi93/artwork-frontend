import { useState } from "react"
import React from "react";

const Login = () => {
    let [userName, setUserName] = useState("");
    let [password, setPassword] = useState("");

    return (
        <div>
            <h1>Welcome to PicPicker!</h1>
            <div>Please log in to continue!</div>
            <div>Username:
                <input type="text" placeholder="Type your username here" onChange={(e) => setUserName(e.target.value)} value={userName}></input>
            </div>
            <div>Password:
                <input type="password" placeholder="Type your password here" onChange={(e) => setPassword(e.target.value)} value={password}></input>
            </div>
            <button>Send</button>
        </div>
    )
}

export default Login