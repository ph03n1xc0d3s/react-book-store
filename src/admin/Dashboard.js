import React from "react";
import Card from "../components/Card";
import { FaBook } from "react-icons/fa6";
import { FaFilePen } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <div className="container p-3">
      <div className="cards-section d-flex flex-row gap-3 flex-wrap">
        <Card title={"Total Books"} content={"300"} icon={<FaBook />} />
        <Card
          title={"Authors"}
          content={"40"}
          icon={<FaFilePen color="" />}
        />
        <Card title={"Active Books"} content={"4025"} />
        <Card title={"Users"} content={"3000"} />
        <Card title={"Categories"} content={"25"} />
        <Card title={"Sales"} content={"$25k"} />
        <Card title={"Revenue"} content={"$55k"} />
        <Card title={"Website Traffic"} content={"35k "} />
        <Card title={"Last Login"} content={"12 May, 2024 5:56 AM"} />
      </div>
      <div className="container section-2">
        <h2>Hello</h2>
      </div>
    </div>
  );
};

export default Dashboard;
