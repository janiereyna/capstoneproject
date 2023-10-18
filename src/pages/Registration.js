import React, { useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import "../styles.css";
import Navbar from "../components/Navbar";
import MyAccount from "./MyAccount";
import { Link, Navigate, useMatch, useResolvedPath } from "react-router-dom";
import { auth, app, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";


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
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Declare errorMessage state



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
    setErrorMessage("");
    createUserWithEmailAndPassword(auth, email, password)
    .then(async(userCredential) => {
      const userId = userCredential.user.uid;
      const userDocRef = doc(db, "users", userId);

      await setDoc(userDocRef, {
        email: email,
        role: role,
      });
        
        // Show the success modal
        setIsSuccessModalOpen(true);
  
        // Add a delay before redirecting to the login page
        setTimeout(() => {
          navigate("/login");
        }, 5000); // 2000 milliseconds (2 seconds) delay, adjust as needed
      })
      .catch((error) => {
        // Determine the specific error code
        const errorCode = error.code;
        let errorMessage = "Registration failed. Please try again.";
  
        // Customize error message based on the error code
        switch (errorCode) {
          case "auth/email-already-in-use":
            errorMessage = "Email is already in use. Please use a different email.";
            break;
          case "auth/invalid-email":
            errorMessage = "Invalid email address. Please enter a valid email.";
            break;
          case "auth/weak-password":
            errorMessage = "Weak password. Please choose a stronger password.";
            break;
          // Add more cases for other error codes as needed
          default:
            // Use the default error message
        }
        setErrorMessage(errorMessage);

        // Show the error modal with the specific error message
        setIsErrorModalOpen(true);
      });
  };
  
  
  const closeErrorModal = () => {
    // Close the error modal
    setIsErrorModalOpen(false);
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

        <div className="input-box">
          <label>
            Role:
            <select value={role} onChange={handleRoleChange} required>
              <option value="rider">Rider</option>
              <option value="driver">Driver</option>
            </select>
          </label>
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

{isErrorModalOpen && (
  <Modal
    isOpen={isErrorModalOpen}
    onRequestClose={closeErrorModal}
    contentLabel="Error Modal"
    ariaHideApp={false} // Prevents accessibility error
  >
    <div className="error-modal">
      <h2>Error!</h2>
      <p>{errorMessage}</p>
      <button onClick={closeErrorModal}>Close</button>
    </div>
  </Modal>
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
