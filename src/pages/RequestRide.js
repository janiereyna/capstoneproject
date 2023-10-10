import React from "react";
import "../RequestRide.css";

    export const RequestRide = () => {
      return (
        <div className="dashboard-create-ride-offer">
          <div className="footer-section">
            <div className="footer-section-child" />
            <b className="unt-rides">© 2023 UNT Rides</b>
          </div>
          <img
            className="background-image-icon"
            alt=""
            //src="/backgroundImage.png"
          />
          <div className="dashboard-box">
            <div className="dashboard-border">
              <div className="dashboard-user-interaction" />
              <div className="mini-nav-border" />
              <b className="available-rides-create-container">
                <span className="available-rides-create-container1">
                  {`Available Rides       `}
                  <span className="create-ride-offer">Create Ride Offer</span> My
                  Rides
                </span>
              </b>
              <div className="search-bar">
                <div className="search-bar-child" />
                <b className="search-rides">Search rides</b>
              </div>
            </div>
            <div className="form-fields-create-ride-offe">
              <div className="form-fields-create-ride-offe-child" />
              <div className="form-fields-create-ride-offe-item" />
              <div className="form-fields-create-ride-offe-inner" />
              <div className="rectangle-div" />
              <div className="form-fields-create-ride-offe-child1" />
              <div className="form-fields-create-ride-offe-child2" />
              <b className="available-seats"> Available seats</b>
              <b className="date"> mm/dd/yyy</b>
              <b className="destination"> Destination</b>
              <b className="terminal"> Terminal</b>
              <b className="name"> Name</b>
            </div>
          </div>
          <b className="submit-ride-offer">Submit Ride Offer</b>
        </div>
      );
    };
    
    export default RequestRide;
