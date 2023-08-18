import React from "react";

import "./welcome.css";

import crypto from "../../../assets/welcome.png";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="left-section">
        <h1>
          Link your DApps to <br />
          your wallets
        </h1>
        <p>
          DappsConnects is an open protocol that lets users connect their mobile
          crypto wallets to your DApp.
        </p>
      </div>
      <div className="right-section">
        <img src={crypto} alt="crypto" className="crypto" />
      </div>
    </div>
  );
};

export default Welcome;
