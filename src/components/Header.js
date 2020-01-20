import React from "react";
import { FaCar, FaMapMarkedAlt } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md'

import "tabler-react/dist/Tabler.css";

import { Avatar } from "tabler-react";

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import Carlos from '../assets/Carlos.jpg';
import Fernando from '../assets/Fernando.jpg';
import Torstein from '../assets/Torstein.jpg';

const Header = props => {
  if(props.screen === "General"){
    return (
      <Navbar style={{backgroundColor: "white", borderBottom: "1px solid #808080a8"}}>
        <Navbar.Brand href=""><FaCar style={{fontSize: "35px", color: "#0e4f88"}}/></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#general" active>
            <FaMapMarkedAlt style={{fontSize: "20px", marginBottom: "5px"}}/> <span style={{fontSize: "20px"}}>General</span>
          </Nav.Link>
          <Nav.Link href="#inivual" onClick={() => props.changeScreen("Individual")}>
            <MdLocationOn style={{fontSize: "20px", marginBottom: "5px"}}/> <span style={{fontSize: "20px"}}>Individual</span>
          </Nav.Link>
        </Nav>
        <Avatar.List>
          <Avatar 
            onClick={() => window.location = 'https://www.linkedin.com/in/carlos-villa-sanchez/'} 
            size="md" 
            imageURL={Carlos}
            style={{cursor: "pointer"}} />
          <Avatar 
            onClick={() => window.location = 'https://www.linkedin.com/in/fernando-monje/'} 
            size="md" 
            imageURL={Fernando}
            style={{cursor: "pointer"}}  />
          <Avatar 
            size="md" 
            imageURL={Torstein}
            style={{cursor: "pointer"}}  />
        </Avatar.List>
      </Navbar>
    );
  }else{
    return (
      <Navbar style={{backgroundColor: "white", borderBottom: "1px solid #808080a8"}}>
        <Navbar.Brand href=""><FaCar style={{fontSize: "35px", color: "#0e4f88"}}/></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#general"  onClick={() => props.changeScreen("General")}>
            <FaMapMarkedAlt style={{fontSize: "20px", marginBottom: "5px"}}/> <span style={{fontSize: "20px"}}>General</span>
          </Nav.Link>
          <Nav.Link href="#inivual" active>
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