import React, { useState, useEffect } from "react";
import {
  validateEmail,
  validatePhoneNumber,
  countWords,
} from "../validations/Validation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Modal } from "react-bootstrap";
import InputComponent from "./InputComponent";

const UserForm = () => {
  var errorInit = {
    name: "",
    email: "",
    mobile: "",
    country: "",
    city: "",
    state: "",
    message: "",
  };
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(errorInit);

  var toSubmit = false;
  useEffect(() => {
    console.log(error);

}, [error])
  const handleClose = () => setShow(false);

  const onHandleChange = (e) => {
    console.log(0);
    toSubmit = true;
    e.preventDefault();

    setError(
      validateError(
        name,
        email,
        parseInt(mobile),
        country,
        city,
        state,
        message
      )
    );

    if (toSubmit) {
      console.log(5055);

      initializeValue();
      setError(errorInit);
      setShow(true);
      console.log();
    }
  };
  const initializeValue = () => {
    setName("");
    setEmail("");
    setMobile("");
    setCountry("");
    setCity("");
    setState("");
    setMessage("");
  };

  const validateError = (
    name,
    email,
    mobile,
    country,
    city,
    state,
    message
  ) => {
    var error = errorInit;
    if (!name) {
      error.name = "Name is Mandatory";
      toSubmit = false;
    }

    if (!email) {
      error.email = "Email is Mandatory";
      toSubmit = false;
    }

    if (!mobile) {
      error.mobile = "Mobile is Mandatory";
      toSubmit = false;
    }

    if (!country) {
      error.country = "Country is Mandatory";
      toSubmit = false;
    }

    if (!city) {
      error.city = "City is Mandatory";
      toSubmit = false;
    }

    if (!state) {
      error.state = "State is Mandatory";
      toSubmit = false;
    }

    if (!message) {
      error.message = "Message is Mandatory";
      toSubmit = false;
    }

    if (!validateEmail(email)) {
      error.email = "Enter valid Email Address";
      toSubmit = false;
    }
    if (!validatePhoneNumber(mobile)) {
      error.mobile = "Enter valid Mobile Number";
      toSubmit = false;
    }
    if (mobile.toString().length !== 10) {
      error.mobile = "Mobile Number should be 10 digit";
      toSubmit = false;
    }

    if (countWords(message) < 6) {
      error.message = "Message should contains atleast 6 words";
      toSubmit = false;
    }
    console.log("error", error);

    return error;
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              backgroundColor: "orange",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <h5>Form Submitted !</h5>
          </div>
        </Modal.Body>
      </Modal>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2>User Form</h2>
      </div>
      <div className="flex-container">
        <div className="flex-item">
          <Form onSubmit={onHandleChange} className="">
            <InputComponent
              type="text"
              error={error.name}
              value={name}
              placeholder="Enter your Name"
              label="Name"
              onChange={(name) => {
                setName(name);
              }}
            />
            <InputComponent
              type="text"
              error={error.email}
              value={email}
              placeholder="Enter Email Address"
              label="Email Address"
              onChange={(email) => {
                setEmail(email);
              }}
            />
            <InputComponent
              type="number"
              error={error.mobile}
              value={mobile}
              placeholder="Enter Mobile Number"
              label="Mobile Number"
              onChange={(mobile) => {
                setMobile(mobile);
              }}
            />
            <InputComponent
              type="text"
              error={error?.country}
              value={country}
              label="Country"
              onChange={(country) => {
                setCountry(country);
              }}
            />
            <InputComponent
              type="text"
              error={error?.city}
              value={city}
              label="City"
              onChange={(city) => {
                setCity(city);
              }}
            />
            <InputComponent
              type="text"
              error={error?.state}
              value={state}
              label="State"
              onChange={(state) => {
                setState(state);
              }}
            />
            <InputComponent
              textbox
              type="text"
              error={error?.message}
              value={message}
              label="Message"
              onChange={(message) => {
                setMessage(message);
              }}
            />

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
