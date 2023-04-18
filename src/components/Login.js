
import React, { useState, useEffect } from "react";
export const Login = (props) => {


    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[onLogin, setOnLogin] = useState([]);


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);

        const loginAttempt = {
            email: email,
            password: password
        }

        fetch("/login",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(loginAttempt)
        }
        )
        .then((r)=>r.json())
        .then((user)=>setOnLogin(user))
    }

    useEffect(()=>{
    console.log(onLogin)
    },[onLogin])



    return(
        <div className="userAuth">
            <form className="login" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="input email" id="email" name="email"/>
                <label htmlFor="password">Password</label>
                <input value = {password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="input password" id="password" name="password"/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;