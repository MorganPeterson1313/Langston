import React, { Component } from 'react'
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Michael from '../Michael.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
export class Contact extends Component {
    render() {
        return (
            <div className= "Contact">
                
                <div style={{ display: "flex" , justifyContent: "center", marginBottom:"20%"}}>
            <Card style={{ width: '25rem'}}>
  <Card.Img variant="top" src={Michael} />
  <Card.Body>
    <Card.Title>Contact</Card.Title>
    <Card.Text>
    <div>
              <p>Phone: (704)-317-8081</p>
              <p>Toll Free: 1(888)-928-3422</p>
              <p>Fax: (704) 517-3249</p>
            </div>
    </Card.Text>
    <Button variant="secondary">Products</Button>
  </Card.Body>
</Card>
</div>
                
                
                
                
                
                
            
            </div>
        )
    }
}

export default Contact
