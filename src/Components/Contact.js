import React, { Component } from 'react'
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Michael from '../Michael.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Products';
import { Switch, Route } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
export class Contact extends Component {
    render() {
        return (
            <div className= "Contact">
                
                <div style={{ display: "flex" , justifyContent: "center", marginBottom:"20%"}}>
            <Card style={{ width: '30rem'}}>
  
  <Card.Body>
    <Card.Title>Get In touch</Card.Title>
    <Card.Text>
    <div class="container">
    <div style={{alignContent: "center", margin: "2%"}}>
					<form name= "contact" method="post" data-netlify="true" action="#">
						<div className="row gtr-uniform">
							<div className="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="Name" /></div>
							<div className="col-6 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Email" /></div>
							<div className="col-12"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
							<div className="col-12">
								<ul className="actions special">
                                <Button variant="secondary" type="submit" >Send Message</Button>
									{/* <li><input type="submit" value="Send Message" className="secondary" /></li> */}
								</ul>
							</div>
						</div>
					</form>
				</div>
                </div>
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
