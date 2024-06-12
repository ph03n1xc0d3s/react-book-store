import React, { useEffect, useState } from "react";
import axios from "axios";

const NewsLetter = () => {
  const [subscribe, setSubscribe] = useState(false);
  const [email, setEmail] = useState("");

  const handleNewsLetterEvent = async () => {
    setSubscribe(true);
    const data = { email };
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/subscribe",
        data
      );
      console.log(response.data, "post request response");
    } catch (error) {
      console.log(error, "Something went wrong");
    }
  };

  return (
    <div className={`card ${subscribe ? "bg-light" : "bg-dark"}`}>
      <div className="card-title text-center mt-3 mb-1">
        <h4 className={`text-light ${subscribe ? "d-none" : "d-block"}`}>
          Subscribe for new updates!
        </h4>
      </div>
      <div className="card-body d-flex gap-2 justify-content-center">
        {subscribe !== true ? (
          <>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email Address"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="btn btn-sm btn-primary"
              onClick={handleNewsLetterEvent}
            >
              Subscribe
            </button>
          </>
        ) : (
          <p className="text-center text-success">Subscribed Successfully</p>
        )}
      </div>
    </div>
  );
};

export default NewsLetter;
