import React, { Component } from 'react'
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MichaelLogo from '../MichaelLogo.jpeg';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';


export class Home extends Component {
    render() {
        return (
            <div className= "Home">
                
            <div style={{ display: "flex" , justifyContent: "center", marginBottom:"20%"}}>
            <img
                 
                 alt="header Image"
                 src="https://images.unsplash.com/photo-1532079563951-0c8a7dacddb3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80" 
                 Width= "65%"
                 height= "5%"
                 className="d-inline-block align-top"
                
                />
            <Card style={{ width: '25rem'}}>
  <Card.Img variant="top" src={MichaelLogo} />
  <Card.Body>
    <Card.Title>M. Langston</Card.Title>
    <Card.Text>
      One Stop Shopping for all your Services
    </Card.Text>
    <Button variant="secondary" href = "/contact">Contact Us</Button>
  </Card.Body>
</Card>

<Switch>
              
              <Route path='/contact' component={Contact} />
                        
</Switch>
</div>
            </div>
        )
    }
}

export default Home
