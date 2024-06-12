import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const current_url = window.location.href;
  return (
    <>
      {current_url.includes('admin') ? '' : <Navigation/>}
      <div className="d-flex" style={{ minHeight: "700px" }}>
      {current_url.includes('admin') ? <Sidebar/> : ''}
        <main className="w-100">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
