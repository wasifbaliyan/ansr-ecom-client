import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" style={{ textDecoration: "none", color: "#000" }}>
          <div className="nav-brand">Ansr.</div>
        </NavLink>
      </nav>
    </header>
  );
}
