import React, { Component } from "react";
import { FaCar, FaHome, FaMapMarkedAlt } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md'

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

class Header extends Component {
  render() {
    return (
      <Navbar style={{backgroundColor: "white", borderBottom: "1px solid #808080a8"}}>
        <Navbar.Brand href=""><FaCar style={{fontSize: "35px", color: "#0e4f88"}}/></Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="#general">
            <FaMapMarkedAlt style={{fontSize: "20px", marginBottom: "5px"}}/> <span style={{fontSize: "20px"}}>General</span>
          </Nav.Link>
          <Nav.Link href="#inivual">
            <MdLocationOn style={{fontSize: "20px", marginBottom: "5px"}}/> <span style={{fontSize: "20px"}}>Individual</span>
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
    );
  }
}

export default Header;