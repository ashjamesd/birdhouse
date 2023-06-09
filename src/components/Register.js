import React, { useState } from "react";

export const Register = (props) => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[username, setUsername] = useState("");

    const handleSubmit = (e) =>{
        // e.preventdefault();
        console.log(email);
        const newUser = {
            username: username,
            email: email,
            password: password
        }

        fetch ("/users", {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
    }


    return(
        <div className="userAuth">
            <form className="register" onSubmit={handleSubmit}>
                <label htmlFor='name'>Username: </label>
                <input value = {username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
                <label htmlFor="email">Email: </label>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="input email" id="email" name="email"/>
                <label htmlFor="password">Password: </label>
                <input value = {password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="input password" id="password" name="password"/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;