import React from "react";
import Navbar from "../navbar/Navbar";
import ConnectWallet from "./connectWallet/ConnectWallet";

import "./selectWallet.css";

const SelectWallet = () => {
  return (
    <div>
      <Navbar />
      <ConnectWallet />
    </div>
  );
};

export default SelectWallet;
