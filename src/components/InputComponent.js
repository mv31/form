import React from "react";
import { Form } from "react-bootstrap";

const InputComponent = ({ error,label,textbox,type,value,onChange,placeholder}) => {
  return (
    <Form.Group className="mb-3" controlId={label}>
      <Form.Label>{label}</Form.Label>
      {textbox ? (
        <Form.Control
          type={type}
          value={value}
          as="textarea"
          onChange={(e) => {
            onChange(e.target.value);
          }}
          placeholder={placeholder ? placeholder : label}
        />
      ) : (
        <Form.Control
          type={type}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          placeholder={placeholder ? placeholder : label}
        />
      )}
       <p className='error-message'>{error}</p>
    </Form.Group>
  );
};

export default InputComponent;
