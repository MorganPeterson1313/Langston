import MichaelLogo from './MichaelLogo.jpg';
import React, { Component } from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Components/Contact';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';

class App extends Component  {
  render(){
  return (
    
      <div className="App" style = {{"backgroundColor": "grey"}}>
       
      
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
      <img
        alt="logo"
        src={MichaelLogo} 
        width="60"
        height="60"
        className="d-inline-block align-top"
      />{' '}
      M. Langston
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href= "/Contact">Contact Us</Nav.Link>
      <Nav.Link href="/products">Featured Products</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#Contact">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      
          
            <div style={{ textAlign:"center", color:"white", marginTop:"5%"}}>
            <h1>This Website Is Under Construction</h1>
            </div>
          
                  
<Switch>
              <Route exact path='/' component={Home} />
              <Route path='/Contact' component={Contact} />
              <Route path='/products' component={Products} />
                        {/* <Route render={function () {
                            return <p>Not found</p>
                        }} /> */}
                   </Switch>
    </div>
  );
}
}
export default App;
