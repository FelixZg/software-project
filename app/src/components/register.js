import React, { useState } from 'react';
import './register.css';
import {Button, HelpBlock, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import { useFormFields } from '../libs/hooksLib';

export default function Register(props) {
    const [fields, handleFieldChange] = useFormFields({
    firstName: "",
    lastName: "",
      email: "",
      programName:"",
      school: "",
      password: "",
      passConf: "",
      confirmationCode: ""
    });
    const [newUser, setNewUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    function validateForm() {
      return (
        fields.email.length > 0 &&
        fields.password.length > 0 &&
        fields.password === fields.passConf
      );
    }
  
    function validateConfirmationForm() {
      return fields.confirmationCode.length > 0;
    }
  
    async function handleSubmit(event) {
      event.preventDefault();
      setIsLoading(true);

    setNewUser("test");

    setIsLoading(false);
  }

  async function handleConfirmationSubmit(event) {
    event.preventDefault();

    setIsLoading(true);
  }

  function renderConfirmationForm() {
    return (
    <form onSubmit={handleConfirmationSubmit}>
        <FormGroup controlId="confirmationCode" bsSize="large">
          <ControlLabel>Confirmation Code</ControlLabel>
          <FormControl
            autoFocus
            type="tel"
            onChange={handleFieldChange}
            value={fields.confirmationCode}
          />
          <HelpBlock>Please check your email for the code.</HelpBlock>
        </FormGroup>
        <Button
          block
          type="submit"
          bsSize="large"
          isLoading={isLoading}
          disabled={!validateConfirmationForm()}
        >
          Verify
        </Button>
      </form>
    );
  }
  function renderForm() {
    return (
      <form onSubmit={handleSubmit}>
                  <FormGroup controlId="firstName" bsSize="medium">
          <ControlLabel>First Name</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={fields.firstName}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="lastName" bsSize="medium">
          <ControlLabel>Last Name</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={fields.lastName}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="email" bsSize="medium">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="programName" bsSize="medium">
          <ControlLabel>Program Name</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={fields.programName}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="school" bsSize="medium">
          <ControlLabel>School</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={fields.school}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="medium">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="confirmPassword" bsSize="medium">
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            type="password"
            onChange={handleFieldChange}
            value={fields.passConf}
          />
        </FormGroup>
        <Button
          block
          type="submit"
          bsSize="large"
          isLoading={isLoading}
          disabled={!validateForm()}>
          Signup
        </Button>
      </form>
    );
  }

  return (
    <div className="Register">
      {newUser === null ? renderForm() : renderConfirmationForm()}
    </div>
  );
}
