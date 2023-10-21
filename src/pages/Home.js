import React from "react";

export const Home = () => {
  return (
     <div className="element-panel-intro">
      <div className="overlap-group">
        <div className="requestride-g">
          <img className="carandstreet" alt="Carandstreet" src="/Images/carandstreet.png" />
          <p className="request-a-ride-get-p">Request a ride get picked up by a nearby community driver</p>
          <div className="text-wrapper">Request Ride</div>
        </div>
        <img className="city-driver-bro" alt="City driver bro" src="/Images/city-driver-bro-1.png" />
      </div>
      <div className="overlap">
        <div className="confirmdriver-g">
          <img className="phoneandstreet" alt="Phoneandstreet" src="/Images/redlocationicon.png" />
          <p className="know-your-driver-in">
            Know your driver in advance and be able to view current location in real time on the map
          </p>
          <div className="div">Confirm Your Driver</div>
        </div>
        <img className="city-skyline-bro" alt="City skyline bro" src="/Images/city-skyline-bro-1.png" />
      </div>
      <div className="overlap-2">
        <div className="trackride-g">
          <p className="huge-drivers-network">Huge drivers network helps you find comforable, safe and cheap ride</p>
          <div className="text-wrapper-2">Track your ride</div>
          <img className="redlocationicon" alt="Redlocationicon" src="/Images/redlocationicon.png" />
        </div>
        <img className="navigation-bro" alt="Navigation bro" src="/Images/navigation-bro-1.png" />
      </div>
    </div>
  );
};

export default Home;
