import React from "react";

const NewsLetter = () => {
  return (
      <div className="card bg-dark">
      <div className="card-title text-center mt-3 mb-1">
        <h4 className="text-light">Subscribe for new updates!</h4>
      </div>
        <div className="card-body d-flex gap-2">
            <label htmlFor=""></label>
            <input type="text" className="form-control" placeholder="Enter Email Address"/>
            <button className="btn btn-sm btn-primary">Subscribe</button>
        </div>
      </div>
  );
};

export default NewsLetter;
