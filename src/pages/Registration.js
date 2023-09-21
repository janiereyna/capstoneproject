import React, {useState} from "react"
import Navbar from "../components/Navbar"
import MyAccount from "./MyAccount"
import { Link, Navigate, useMatch, useResolvedPath } from "react-router-dom"
import { auth, app } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"

export const  Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState("rider"); // Default role is "rider"
    const navigate = useNavigate('');
    /*const [name, setName] = useState('');
    const [lastname, setlastName] = useState('');
    const [number, setNumber] = useState('');
    */

    const signUp = (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // After user registration, set their role using custom claims
        // "driver" or "rider" based on the selection
        const user = userCredential.user;
        const customClaims = { role: role };
        // Update custom claims for the user
        return auth.setCustomUserClaims(user.uid, customClaims);
      })
      .then(() => {
        // Redirect to the appropriate dashboard or page based on the role
        if (role === "rider") {
          navigate("login");
        } else if (role === "driver") {
          navigate("login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
} 

    return (
      <div class="wrapper">
      <h2>Registration</h2>
      <form onSubmit={signUp}>
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
        <div className="input-box">
          <label>Select Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="rider">Rider</option>
            <option value="driver">Driver</option>
          </select>
        </div>
        <div class="input-box button">
          <input type="Submit" value="Register" />
        </div>
        <div class="text">
          <h3>
            Already have an account? <a href="/login">Login here</a>
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


    /*div class="input-box">
            <input type="text" placeholder="First Name" required />
          </div>
          <div class="input-box">
            <input type="text" placeholder="Last Name" required />
          </div>
          <div class="input-box"></div>


        */

          /*
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    navigate("/login")
    // Signed in 
    console.log(userCredential)
    // ...
  })
  .catch((error) => {
    console.log(error)
  });
} 

          */