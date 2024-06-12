import React from "react";

const Card = (props) => {
  return (
    <div className={`card ${props.bg} border-0`} style={{ width: "335px" }}>
      <div className="card-body rounded-1 text-light" style={{backgroundColor: '#5AB2FF'}}>
        <span className="card-title">{props.title} {props.icon}</span>
        <h3 className="card-text">{props.content}</h3>
      </div>
    </div>
  );
};

export default Card;
