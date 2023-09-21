//import e from "express";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React, {useState} from "react"
import { auth, app } from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"

export const  Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate('');

    const signIn = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      navigate("/")
    //Signed in 
    console.log(userCredential)
    // ...
  })
  .catch((error) => {
    console.log(error)
  });
} 


    /*const handleSubmit = (e) => {
        e.preventDefaul();
        console.log(email);

    }
*/
return (
  <div class="wrapper">
  <h2>Login</h2>
  <form action="#" onSubmit={signIn}>
    <div class="input-box">
    <input
        type="text"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
/>
    </div>
    <div class="input-box">
    <input
       type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
/>
    </div>
    <div class="input-box button">
      <input type="Submit" value="Login" />
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

    