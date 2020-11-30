import React, { Component } from 'react'
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Michael from '../Michael.jpg';



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
      One Stop Shop for all your Services
    </Card.Text>
    <Button variant="secondary">Products</Button>
  </Card.Body>
</Card>
</div>
            </div>
        )
    }
}

export default Home
