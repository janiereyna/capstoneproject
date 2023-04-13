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
      <div class="wrapper">
        <h2>Login</h2>
        <form action="#">
          <div class="input-box">
            <input type="text" placeholder="Email" required />
          </div>
          <div class="input-box">
            <input type="password" placeholder="Password" required />
          </div>
          <div class="input-box button">
            <input type="Submit" value="Log in" />
          </div>
          <div class="text">
            <h3>
              Don't have an account? <a href="/registration">Register here</a>
            </h3>
          </div>
        </form>
      </div>
    );
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