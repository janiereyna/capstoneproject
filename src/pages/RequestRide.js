import React from "react";
import { Link } from "react-router-dom";

export const RequestRide = () => {
  const css = `
  .footer-section-child {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #333;
    width: 1440px;
    height: 64px;
  }
  .unt-rides {
    position: absolute;
    top: 20px;
    left: 659px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 151px;
    height: 24px;
  }
  .background-image-icon,
  .footer-section {
    position: absolute;
    top: 1016px;
    left: 0;
    width: 1440px;
    height: 64px;
  }
  .background-image-icon {
    background-image: url("/Images/backgroundImage.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    height: 1016px;
    object-fit: cover;
    opacity: 0.9;
  }
  .dashboard-user-interaction {
    position: absolute;
    top: 1.09px;
    left: 0;
    border-radius: 10px;
    background-color: #e2e2e2;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid #000;
    box-sizing: border-box;
    width: 1257px;
    height: 715.91px;
  }
  .mini-nav-border {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px 10px 0 0;
    background-color: #333;
    width: 1257px;
    height: 95.09px;
  }
  .available-rides,
  .create-ride-offer,
  .my-rides {
    position: absolute;
    top: 45px;
    left: 802px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 137px;
    height: 47px;
    background: transparent;
    font-size: 15px;
    font-weight: bold;
    color: #fff;
    white-space: nowrap;
  }
  
  .create-ride-offer {
    position: absolute;
    top: 45px;
    left: 945px; /* Adjusted the left property */
    width: 162px;
    height: 47px;
  }
  
  .my-rides {
    position: absolute;
    top: 45px;
    left: 1088px; /* Adjusted the left property */
    width: 140px;
    height: 47px;
  }
  
  .search-bar-child {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
    background-color: #d9d9d9;
    width: 250.77px;
    height: 37.16px;
  }
  .search-rides {
    position: absolute;
    top: -5.0px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 250.14px;
    height: 30.88px;
    background-color: transparent;
  }
  .search-bar {
    position: absolute;
    top: 29.51px;
    left: 29.63px;
    width: 250.77px;
    height: 37.16px;
    text-align: center;
    font-size: 16px;
    color: #7e7e7e;
  }
  .dashboard-border {
    position: absolute;
    top: 0;
    left: 0;
    width: 1257px;
    height: 717px;
  }
  .form-fields-create-ride-offe-child,
  .form-fields-create-ride-offe-item {
    position: absolute;
    top: 2.17px;
    left: 1.08px;
    background-color: #fff;
    border: 1px solid #000;
    box-sizing: border-box;
    width: 525.92px;
    height: 57.48px;
  }
  .form-fields-create-ride-offe-item {
    top: 87.84px;
  }
  .form-fields-create-ride-offe-child1,
  .form-fields-create-ride-offe-child2,
  .form-fields-create-ride-offe-inner,
  .rectangle-div {
    position: absolute;
    top: 173.51px;
    left: 0;
    background-color: #fff;
    border: 1px solid #000;
    box-sizing: border-box;
    width: 525.92px;
    height: 57.48px;
  }
  .form-fields-create-ride-offe-child1,
  .form-fields-create-ride-offe-child2,
  .rectangle-div {
    top: 259.18px;
  }
  .form-fields-create-ride-offe-child1,
  .form-fields-create-ride-offe-child2 {
    top: 344.85px;
    left: 1.08px;
  }
  .form-fields-create-ride-offe-child2 {
    top: 430.52px;
    left: 170.28px;
    border-radius: 10px;
    background-color: #00853e;
    width: 186.44px;
  }
  .available-seats,
  .date,
  .destination,
  .name,
  .terminal {
    position: absolute;
    top: 338px;
    left: 2px;
    display: flex;
    align-items: center;
    width: 524px;
    height: 54.7px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .date,
  .destination,
  .name,
  .terminal {
    top: 253px;
    width: 522px;
    height: 54.7px;
  }
  .destination,
  .name,
  .terminal {
    top: 167.43px;
    left: 1.08px;
    width: 523.77px;
    height: 54.5px;
  }
  .name,
  .terminal {
    top: 82px;
    left: 2px;
    width: 522.8px;
    height: 53.8px;
  }
  .name {
    top: -5px; /* Adjust the value to move it up or down */
    left: 2.36px;
    width: 522.77px;
    height: 54.64px;
  }
  .form-fields-create-ride-offe {
    position: absolute;
    top: 147px;
    left: 365px;
    width: 527px;
    height: 488px;
    font-size: 16px;
    color: #9c9b9b;
  }
  .dashboard-box {
    position: absolute;
    top: 149px;
    left: 91px;
    width: 1257px;
    height: 717px;
    text-align: left;
    font-size: 18px;
  }
  .submit-ride-offer {
    position: absolute;
    top: 729px;
    left: 636px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 165px;
    height: 51px;
    background-color: transparent;
  }
  .dashboard-create-ride-offer {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    width: 1440px;
    height: 1080px;
    overflow: hidden;
  }
  .mask-group {
    position: relative;
    width: 100%;
    height: 1080px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    font-family: Inter;
  }
  
    
  `;

  return (
    <div className="mask-group">
      <style>{css}</style>
      <div className="dashboard-create-ride-offer">
        <div className="footer-section">
          <div className="footer-section-child" />
          <b className="unt-rides">© 2023 UNT Rides</b>
        </div>
        <img
          className="background-image-icon"
          alt=""
        />
        <div className="dashboard-box">
          <div className="dashboard-border">
            <div className="dashboard-user-interaction" />
            <div className="mini-nav-border" />
            <Link to="/AvailableRides">
              <button className="available-rides">Available Rides</button>
            </Link>
            <Link to="/RequestRide">
              <button className="create-ride-offer">Create Ride Offer</button>
            </Link>
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
