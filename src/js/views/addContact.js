import React, { useState, useContext } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const AddContact = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    name: "",
    email: "",
    agenda_slug: "josem",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.addContact(contact);
    setContact({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
    navigate("/");
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2>Add a new contact</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formname">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Full Name"
                name="name"
                value={contact.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={contact.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone"
                name="phone"
                value={contact.phone}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                name="address"
                value={contact.address}
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              className="mt-3 container-fluid"
              variant="primary"
              type="submit"
            >
              Save contact
            </Button>
            <Link to="/" className="d-block mt-3">
              or get back to contacts
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
