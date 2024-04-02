import React from "react";

export const Person = ({ person }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{person.full_name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{person.email}</h6>
        <p className="card-text">{person.address}</p>
        <p className="card-text">{person.phone}</p>
      </div>
    </div>
  );
};
