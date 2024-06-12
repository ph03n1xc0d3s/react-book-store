import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const current_url = window.location.href;
  const admin_dashboard_url = 'http://localhost:3001/admin/dashboard'
  return (
    <>
      {current_url == admin_dashboard_url ? '' : <Navigation/>}
      <div className="d-flex" style={{ minHeight: "700px" }}>
      {current_url == admin_dashboard_url ? <Sidebar/> : ''}
        <main className="w-100">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
