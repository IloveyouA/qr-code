import React from "react";
import { Link } from "react-router-dom";
import s from "./Navigation.module.css"

const Navigation = () => {
  return (
    <nav className={s.container}>
      <Link to="/generate">Generate QR Code</Link>
      <Link to="/scan">Scan QR Code</Link>
      <Link to="/generateHistory">Generation History</Link>
      <Link to="/scanHistory">Scan History</Link>
    </nav>
  );
};

export default Navigation;
