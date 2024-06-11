import React, { useState } from "react";

const NewsLetter = () => {
  const [subscribe, setSubscribe] = useState(false);

  const handleNewsLetterSubscription = () => {
    setSubscribe(true);
  };

  return (
    <div className={`card ${subscribe ? "bg-light" : "bg-dark"}`}>
      <div className="card-title text-center mt-3 mb-1">
        <h4 className={`text-light ${subscribe ? 'd-none' : 'd-block'}`}>Subscribe for new updates!</h4>
      </div>
      <div className="card-body d-flex gap-2 justify-content-center">
        {subscribe != true ? (
          <>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email Address"
              id="email"
              required
            />
            <button
              className="btn btn-sm btn-primary"
              onClick={handleNewsLetterSubscription}
            >
              Subscribe
            </button>
          </>
        ) : <p className="text-center text-success">Subscribed Successfully</p>}
      </div>
    </div>
  );
};

export default NewsLetter;
