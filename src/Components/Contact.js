import React, { Component } from 'react'
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Michael from '../Michael.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Products';
import { Switch, Route } from 'react-router-dom';
import InputGroup from  'react-bootstrap/InputGroup';
import Form from  'react-bootstrap/Form';

export class Contact extends Component {
    render() {
        return (
            <div className= "Contact" >
                
                <div style={{ display: "flex" , justifyContent: "center"}}>
            <Card style={{ width: '30rem'}}>
  
  <Card.Body>
    <Card.Title>Get In touch</Card.Title>
    <Card.Text>
    <section id="footer">
				<div class="container">
					<header class="major"></header>
    <div style={{alignContent: "center", margin: "2%"}}>
					<form>
    
  <Form name= "contact" method="POST" data-netlify="true" onSubmit="submit"> 
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
                    
                    
                    </form>
				</div>
                </div>
                </section>
    <div>
              <p>Phone: (704)-317-8081</p>
              <p>Toll Free: 1(888)-928-3422</p>
              <p>Fax: (704) 517-3249</p>
            </div>
    </Card.Text>
    <Button variant="secondary" href="/products" >Products</Button>
  </Card.Body>
</Card>

<Switch>
              
              <Route path='/products' component={Products} />
                        
</Switch>
</div>
                
                
                
                
                
                
            
            </div>
        )
    }
}

export default Contact
