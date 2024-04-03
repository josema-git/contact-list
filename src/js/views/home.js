import React, { useState, useEffect, useContext } from "react"; // Add missing import statement for React component
import { Context } from "../store/appContext";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadContacts();
  }, []);

  return (
    <Container className="pt-3">
      <div className="d-flex justify-content-end">
        <Button>
          <Link to="/add-contact" className="text-white text-decoration-none">
            Add Person
          </Link>
        </Button>
      </div>
      <div className="container mt-3">
        {store.people &&
          store.people.map((item, index) => (
            <Contact key={index} item={item} />
          ))}
      </div>

      <div className="d-flex justify-content-between"></div>
    </Container>
  );
};

const Contact = ({ item }) => {
  const { actions } = useContext(Context);
  return (
    <div className="card flex-row p-3">
      <img
        src="https://www.cepal.cl/wp-content/uploads/2021/04/James-C.-Hutson.jpg"
        className="card-img-top rounded-circle align-self-center"
        style={{ width: "100px", height: "100px" }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{item.email}</h6>
        <p className="card-text">{item.address}</p>
        <p className="card-text">{item.phone}</p>
      </div>
      <div className="d-flex justify-content-end">
        <Button className="h-25 align-self-center bg-transparent border-0">
          <Link
            to={`/edit-contact/${item.id}`}
            className="text-white text-decoration-n</Button>one"
          >
            <h3>
              <FontAwesomeIcon className="text-black" icon={faPencil} />
            </h3>
          </Link>
        </Button>
        <Button
          className="h-25 align-self-center bg-transparent border-0"
          onClick={() => {
            actions.deleteContact(item.id);
          }}
        >
          <h3>
            <FontAwesomeIcon className="text-black" icon={faTrash} />
          </h3>
        </Button>
      </div>
    </div>
  );
};
