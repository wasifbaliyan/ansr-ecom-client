import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">Ansr.</div>
      <div className="footer-text">
        &copy; {new Date().getFullYear()} ANSR. by AAP Inc.
      </div>
    </footer>
  );
}
