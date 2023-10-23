import React, { useEffect } from "react"
import {useState} from "react"
import { auth, app } from "../firebase"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { onAuthStateChanged, signOut } from "firebase/auth"
import "../Authentication.css";

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
                <li className="dropdown">
                <span>Rides</span>
                <ul className="dropdown-content">
                  <CustomLink to="/RequestRide">Create Ride Offer</CustomLink>
                  <CustomLink to="/AvailableRides">Available Rides</CustomLink>
                  <CustomLink to="/MyRides">My Rides</CustomLink>
                </ul>
              </li>
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
