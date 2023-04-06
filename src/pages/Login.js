//import e from "express";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React, {useState} from "react"
export const  Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefaul();
        console.log(email);

    }
    return (
        <div className="auth-form-container">
            <form className="login-form" onSumbit={handleSubmit}>
                <h1> Login </h1>
                <label htmlFor="email">email</label>
                <input type="email" placeholder="youremail@gmail.com" id="email" name="email"/>

                <label htmlFor="password">password</label>
                <input type="password" placeholder="********" id="password" name="password"/>

                <button type="submit">Log In</button>
            </form>
            <CustomLink to ="/registration"><button className="link-button"> Don't have an account? Register here </button></CustomLink>
        </div>
    )
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)  
    const isActive = useMatch({ path : resolvedPath.pathname, end: true}) 
        return (
            <li className={isActive ? "active" : ""}>
                <Link to = {to} {...props}>
                    {children}
                </Link>
            </li>
        )
    }