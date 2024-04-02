import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Home = () => {
  const [people, setPeople] = useState([]);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadData();
  });

  return (
    <Container className="pt-3">
      <div className="d-flex justify-content-end">
        <Button></Button>
      </div>
      <div className="d-flex justify-content-between">
        {store &&
          store.map((person, index) => <Contact item={person} key={index} />)}
      </div>
    </Container>
  );
};

const Contact = ({ item }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{item.full_name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{item.email}</h6>
        <p className="card-text">{item.address}</p>
        <p className="card-text">{item.phone}</p>
      </div>
    </div>
  );
};
