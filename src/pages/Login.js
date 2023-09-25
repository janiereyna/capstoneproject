import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

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
        <p>You have successfully logged in! You will be redirected to the dashboard shortly.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsSuccessModalOpen(true);
        // Optional: You can close the modal and redirect after a delay
        setTimeout(() => {
          setIsSuccessModalOpen(false);
          navigate("/");
        }, 5000); // Adjust the timing as needed
      })
      .catch((error) => {
        console.log("Error during login:", error);
      });
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
    navigate("/");
  };

  return (
    <div className="wrapper">
      <h2>Login</h2>
      <form onSubmit={signIn}>
        <div className="input-box">
          <input
            type="text"
            placeholder="Email"
            required
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="input-box button">
          <input type="Submit" value="Login" />
        </div>
        <div className="text">
          <h3>
            Don't have an account? <Link to="/registration">Register here</Link>
          </h3>
        </div>
      </form>
      {isSuccessModalOpen && (
        <SuccessModal isOpen={isSuccessModalOpen} onClose={closeSuccessModal} />
      )}
    </div>
  );
};