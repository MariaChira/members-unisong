import React from "react";
import "./card.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="member"
        src={props.member.photo}
      />
      <h2>{props.member.name}</h2>
      <p>{props.member.title}</p>
    </div>
  );
};
