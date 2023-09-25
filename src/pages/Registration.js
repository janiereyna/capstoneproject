import React, { useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import "../styles.css";
import Navbar from "../components/Navbar";
import MyAccount from "./MyAccount";
import { Link, Navigate, useMatch, useResolvedPath } from "react-router-dom";
import { auth, app } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const SuccessModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Success Modal"
      ariaHideApp={false} // Prevents accessibility error
    >
      <div className="success-modal">
        <h2>Success!</h2>
        <p>You have successfully registered! You will be redirected to the Login page shortly.</p>
        <button onClick={onClose}>Login</button>
      </div>
    </Modal>
  );
};


export const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("rider"); // Default role is "rider"
  const navigate = useNavigate();
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

 //const isMounted = useRef(true); // Ref to track component mount status

  /*useEffect(() => {
    // Cleanup function to update isMounted on unmount
    return () => {
      isMounted.current = false;
    };
  }, []);
*/
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Show the success modal
        setIsSuccessModalOpen(true);
  
        // Add a delay before redirecting to the login page
        setTimeout(() => {
          navigate("/login");
        }, 5000); // 2000 milliseconds (2 seconds) delay, adjust as needed
      })
      .catch((error) => {
        console.log("Error during registration:", error);
      });
  };
  
  


  const closeSuccessModal = () => {
    // Close the success modal
    setIsSuccessModalOpen(false);
    // Redirect to the login page
    navigate("/login");
  };

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
            onChange={handleEmailChange}
          />
          
        </div>
        <div class="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
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
      <div className="message-container">
      {isSuccessModalOpen && (
        <SuccessModal isOpen={isSuccessModalOpen} onClose={closeSuccessModal} />
      )}
      </div>
    </div>
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

/*<div className="input-box">
          <label>Select Role:</label>
          <select value={role} onChange={handleRoleChange} required>
            <option value="rider">Rider</option>
            <option value="driver">Driver</option>
          </select>
        </div>
        */