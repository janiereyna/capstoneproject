import React from "react";
import { Link } from "react-router-dom"; 
import "../RequestRide.css";

export const RequestRide = () => {
  return (
    <div className="mask-group">
      <div className="dashboard-create-ride-offer">
        <div className="footer-section">
          <div className="footer-section-child" />
          <b className="unt-rides">© 2023 UNT Rides</b>
        </div>
        <img
          className="background-image-icon"
          alt=""
          //src="/public/Images/backgroundImage.png"
        />
        <div className="dashboard-box">
          <div className="dashboard-border">
            <div className="dashboard-user-interaction" />
            <div className="mini-nav-border" />
            <button className="available-rides">Available Rides</button>
            <button className="create-ride-offer">Create Ride Offer</button>
            <Link to="/MyRides">
              <button className="my-rides">My Rides</button>
            </Link>
            <div className="search-bar">
              <div className="search-bar-child" />
              <input type="text" className="search-rides" placeholder="Search Rides" />
            </div>
          </div>
          <div className="form-fields-create-ride-offe">
            <div className="form-fields-create-ride-offe-child" />
            <div className="form-fields-create-ride-offe-item" />
            <div className="form-fields-create-ride-offe-inner" />
            <div className="rectangle-div" />
            <div className="form-fields-create-ride-offe-child1" />
            <div className="form-fields-create-ride-offe-child2" />
            <input type="text" className="available-seats" placeholder="Available Seats" />
            <input type="text" className="date" placeholder="MM/DD/YY" />
            <input type="text" className="destination" placeholder="Destination" />
            <input type="text" className="terminal" placeholder="Terminal" />
            <input type="text" className="name" placeholder="Name" />
          </div>
        </div>
        <button className="submit-ride-offer">Submit Ride Offer</button>
      </div>
    </div>
  );
};

export default RequestRide;
