import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Navbar, NavItem, Nav } from 'react-bootstrap';
import '../css/login.css'

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validation() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(e) {
        e.preventDefault();
    }
    // const{logIn} = this.props;
    // const{username, password, submitted} = this.state;
    return (
        <div>
            <div className="container">
                <Navbar fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            EduCloud
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem href="/register">Register</NavItem>
                            <NavItem href="/login">Login</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div className="Login">
                <form onSubmit={handleSubmit}>
                    <FormGroup controlId="email" bsSize="medium">
                        <ControlLabel>Email Address:</ControlLabel>
                        <FormControl
                            autofocus
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <br></br>
                        <FormGroup controlId="password" bsSize="medium">
                            <ControlLabel>Password:</ControlLabel>
                            <FormControl
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                            />
                        </FormGroup>
                        <Button block bsSize="large" disabled={!validation()} type="submit">
                            Login
        </Button>

                    </FormGroup>

                </form>
            </div>
        </div>
    )
}

