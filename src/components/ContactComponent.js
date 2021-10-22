import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component  {
    
    //controlled form set up//

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            feedback: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
//we can use arrow fxn to skip the this.methodNamed.bind(metho).
//see example below

// handleInputChange = (event) => {
//     const target = event.target;
//     const name = target.name;
//     const value = target.type === 'checkbox' ? target.checked : target.value;

//     this.setState({
//         [name]: value
//     });
// }

//event.target is a built in java script property that goes with the onChange event handler.
//it is guiding the const target to the event element that it was orinated from which in this case is whatever the onChange element is from.
    

//handling changes in form elements.
// target.name is the equivalent to event.target.name???
// 
handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
    
        this.setState({
            [name]: value
        });
    }
// handling changes in form submission.  event.preventDefault is to prevent the entire page being refresh when submit button is clicked.  it is usually automatically refresh the entire page when submit is click.  we do not want that.

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    //end of controlled form set up//
//form section below this line.

    //<Col md ={10} is equivalent to className ="col-md-10". <--- reactstrap col component.
    //  it is the concept in Label component.  md ={2} === col-md-2
    //md ={{size: 4, offset:2}} === className="col-md-4 offset-md-2"
    //remember form input set up has the usual attributes: type, id, name and placeholder.
///CONTROLLED FORM SET UP?
//we need to set the value to the state so that the state holds the value of the form.  
//value ={this.state.whatever_property_name_that_we_wrote_in_the_state}
//exception is checkbox.  we dont use value attribute but checked attribute instead.

//WE WILL SET THE ENTIRE FORM TO a built in EVENT HANDLER CALL onSubmit which set to {this.handleSubmit} method.
    render() {
    return (
        <div className="container">
            <div className="row">
                    <div className="col">
                            <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Contact Us</h2>
                    </div>

                    <div className="row row-content align-items-center">
                        <div className="col-sm-4">
                            <h5>Our Address</h5>
                            <address>
                            1 Nucamp Way<br />
                            Seattle, WA 98001<br />
                            U.S.A.
                            </address>
                        </div>
                        <div className="col">
                            <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-206-555-1234</a><br />
                            <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o" /> campsites@nucamp.co</a>
                        </div>
                        <div className="row row-content">
                            <div className="col-12">
                                <h2>Send us your Feedback</h2>
                                <hr />
                            </div>


                            <div className="col-md-10">
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup row>
                                        <Label htmlFor="firstName" md={2}>First Name</Label>
                                        <Col md={10}>
                                            <Input type="text" id="firstName" name="firstName"
                                            placeholder="First Name"
                                            value={this.state.firstName}
                                            onChange={this.handleInputChange} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="lastName" md={2}>Last Name</Label>
                                        <Col md={10}>
                                            <Input type="text" id="lastName" name="lastName"
                                            placeholder="Last Name"
                                            value={this.state.lastName}
                                            onChange={this.handleInputChange} />
                                        </Col>                        
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                        <Col md={10}>
                                            <Input type="tel" id="phoneNum" name="phoneNum"
                                            placeholder="Phone number"
                                            value={this.state.phoneNum}
                                            onChange={this.handleInputChange} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="email" md={2}>Email</Label>
                                        <Col md={10}>
                                            <Input type="email" id="email" name="email"
                                            placeholder="Email"
                                            value={this.state.email}
                                            onChange={this.handleInputChange} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md={{size: 4, offset: 2}}>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="checkbox"
                                                    name="agree"
                                                    checked={this.state.agree}
                                                    onChange={this.handleInputChange} /> {' '}
                                                <strong>May we contact you?</strong>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <Input type="select" name="contactType"
                                                value={this.state.contactType}
                                                onChange={this.handleInputChange}>
                                            <option>By Phone</option>
                                            <option>By Email</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                        <Col md={10}>
                                            <Input type="textarea" id="feedback" name="feedback"
                                            rows="12"
                                            value={this.state.feedback}
                                            onChange={this.handleInputChange}></Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md={{size: 10, offset: 2}}>
                                            <Button type="submit" color="primary">
                                            Send Feedback
                                            </Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        );
    }
}



export default Contact;