// src/components/Register.js
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/register",
        formData,
      );
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);
      // Redirect to the dashboard
    } catch (error) {
      console.error("Error registering user", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='formName'>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId='formDOB'>
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type='date'
          name='dateOfBirth'
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId='formEmail'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId='formPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Register
      </Button>
    </Form>
  );
}

export default Register;
