import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { formatDate, capitalizeFirstLetter } from "../helpers/helpers";

const Orders = () => {
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3000/api/orders");
        setOrder(response.data);
      } catch (error) {
        console.log(error, "Something went wrong");
      }
    };

    fetchData();
  }, []);

  const handleEdit = (id) => {
    console.log(id);
  };

  const handleDelete = (id) => {
    console.log(id);
  };

  return (
    <div className="p-3">
      <Table striped>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Book Name</th>
            <th>User</th>
            <th>Price</th>
            <th>Order Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((e, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{e.book_name}</td>
              <td>{e.username}</td>
              <td>${e.price}.99</td>
              <td
                className={`${
                  e.status == "completed" ? "text-success" : "text-danger"
                }`}
              >
                {capitalizeFirstLetter(e.status)}
              </td>
              <td>{formatDate(e.ordered_at)}</td>
              <td>
                <button
                  className="btn btn-sm btn-primary mx-1"
                  onClick={() => handleEdit(e._id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(e._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Orders;
