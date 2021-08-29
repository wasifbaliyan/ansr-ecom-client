import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="layout">{children}</main>
      <Footer />
    </>
  );
}
