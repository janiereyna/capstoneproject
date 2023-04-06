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
        <div className= "auth-form-container">
            <form className ="registration-form" onSumbit={handleSubmit}>
                <h1> Register </h1>
                <label htmlFor="name">First Name</label>
                <input value={name} id="name" placeholder="First Name" />

                <label htmlFor="lastname">Last Name</label>
                <input value={lastname} id="lastname" placeholder="Last Name" />
                
                <label htmlFor="number">Phone Number</label>
                <input value={number} id="number" placeholder="123-456-7890" />

                <label htmlFor="email">email</label>
                <input type="email" placeholder="youremail@gmail.com" id="email" name="email"/>

                <label htmlFor="password">password</label>
                <input type="password" placeholder="********" id="password" name="password"/>

                <button type="submit">Register</button>

            </form>
            <CustomLink to ="/login"><button className="link-button"> Already have an account? Login here </button></CustomLink>
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

