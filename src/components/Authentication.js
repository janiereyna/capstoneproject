import React, { useEffect } from "react"
import {useState} from "react"
import { auth, app } from "../firebase"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { onAuthStateChanged, signOut } from "firebase/auth"

const Authentication = () => {
    const [authenticatedUser, setauthenticatedUser] = useState("null")

    useEffect(() => {
        const listenAuth = onAuthStateChanged(auth, (user) => {
            if (user) {
                setauthenticatedUser(user)
            } else{
                setauthenticatedUser(null)
            }
        });
        return () => {
            listenAuth();
        };
    },[]);

    const userSignOut = () => {
        signOut(auth)
        .then(()=>{
            console.log("user signed out")
        })
        .catch(error => console.log("error"))
    };

    return (
        <>
        {authenticatedUser === null ? (
            <>
                <CustomLink to ="/login">Login</CustomLink>
                <CustomLink to ="/registration">Sign Up</CustomLink>
                
                
           </>
        ) : (
           <>
                <CustomLink to ="/" onClick={userSignOut}>Sign Out</CustomLink>
                <CustomLink to ="/RequestRide">Request Ride</CustomLink>
                <CustomLink to ="/myaccount">My Account</CustomLink>  
                <CustomLink to ="/RideHistory">Ride History</CustomLink>       
           </>
           )}    
        </>
    );
};

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

export default  Authentication;
