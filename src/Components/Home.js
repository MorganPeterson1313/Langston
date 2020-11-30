import React, { Component } from 'react'
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Michael from '../Michael.jpg';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';


export class Home extends Component {
    render() {
        return (
            <div className= "Home">
            <div style={{ display: "flex" , justifyContent: "center", marginBottom:"20%"}}>
            <Card style={{ width: '25rem'}}>
  <Card.Img variant="top" src={Michael} />
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
