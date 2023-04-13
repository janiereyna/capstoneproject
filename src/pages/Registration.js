import React, {useState} from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"


export const  Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastname, setlastName] = useState('');
    const [number, setNumber] = useState('');


    const handleSubmit = (e) => {
        e.preventDefaul();
        console.log(email);

    }

    return (
      <div class="wrapper">
        <h2>Registration</h2>
        <form action="#">
          <div class="input-box">
            <input type="text" placeholder="First Name" required />
          </div>
          <div class="input-box">
            <input type="text" placeholder="Last Name" required />
          </div>
          <div class="input-box">
            <input type="text" placeholder="Email" required />
          </div>
          <div class="input-box">
            <input type="password" placeholder="Create password" required />
          </div>
          <div class="input-box">
            <input type="password" placeholder="Confirm password" required />
          </div>
          <div class="policy">
            <input type="checkbox" />
            <h3>I accept all terms & condition</h3>
          </div>
          <div class="input-box button">
            <input type="Submit" value="Register Now" />
          </div>
          <div class="text">
            <h3>
              Already have an account? <a href="/login">Login now</a>
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

