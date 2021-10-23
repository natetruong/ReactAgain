import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);



class Contact extends Component  {
    
    //controlled form set up//
//FormFeedback component show us the errors message of the user.  we need to know if the form input has been entered or not aka "touched"

//touched is set up as a nested object inside the state please see below.
//touched: nested object with properties that keep track of the input field to see if the user has entered the input field as in click their house inside the field.  not the same as writing in the input field.
//why do we need this touched property?  to determine if we need to run validation on that  field.  if it has not been touched then we are not going to run validation.
//we are going to place a built in event handler called onBlur.  it will fire when user enters an input field then leaves it.  we are going to tie this to a method that will be written below.

//onBlur ={this.handleBlur("firstName")} this event handler will point the event in the input field named: firstName to handleBlur method.
// ???? "firstName" is an id? that we tie to the onBlur event handler? 
//??? i think fristName is here is target.name which we ties it the handleInputChange().


constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            feedback: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        };

        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    // handleBlur =(field) =>() => {
    //     this.setState ({
    //         touched: {...this.state.touched, [field]: true}
    //     });    
    // }

    // validate(firstName, lastName, phoneNum, email) {
    //     const errors = {
    //         firstName: '',
    //         lastName:'',
    //         phoneNum:'',
    //         email:''
    //     };

    //     if(this.state.touched.firstName) {
    //         if(firstName.length <2) {
    //             errors.firstName ='First name must be at least 2 characters';
    //         } else if(firstName.length >15) {
    //             errors.firstName =' First Name must not be more than 15 characters';
    //         }
    //     }

    //     if(this.state.touched.lastName) {
    //         if(lastName.length <2) {
    //             errors.lastName ='Last name must be at least 2 characters';
    //         } else if(lastName.length >15) {
    //             errors.lastName =' Last Name must not be more than 15 characters';
    //         }
    //     }
//will my code work?
        // const reg = {
        //     phoneNum:'',
        //     email:''
        // };

        // if(this.state.touched.phoneNum) {
        //     if(!phoneNumber === /^\d+$/) {
        //         errors.phoneNum ='The phone number should contain only numbers'
        //     }
        // }

    //     const reg = /^\d+$/;
    //     if(this.state.touched.phoneNum && !reg.test(phoneNum)) {
    //         errors.phoneNum=' The phone number should contain only numbers';
    //     }

    //     if(this.state.touched.email && !email.includes('@')) {
    //         errors.email='Email should contain a @';
    //     }

    //     return errors;

    // }
//we are not changing the touched object so we use setState and we do not want to changed the entire object touched.  we are
//spreading it out using spread syntax.  ...this.state.touched will spread the touched object out.  then we will update
//whatever property that trigger this event.  [field]:true.  whatever passed into handleBlur method whether it was firstName, lastName...

//handleBlue method above is written in arrow fxn syntax so we do not to bike it to the state via .bind.

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
// handleInputChange(event) {
//         const target = event.target;
//         const name = target.name;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
    
//         this.setState({
//             [name]: value
//         });
//     }
// handling changes in form submission.  event.preventDefault is to prevent the entire page being refresh when submit button is clicked.  it is usually automatically refresh the entire page when submit is click.  we do not want that.

handleSubmit(values) {
    console.log("Current state is: " + JSON.stringify(values));
    alert("Current state is: " + JSON.stringify(values));
}   

// handleSubmit(event) {
    //     console.log('Current state is: ' + JSON.stringify(this.state));
    //     alert('Current state is: ' + JSON.stringify(this.state));
    //     event.preventDefault();
    // }

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

        // const errors =this.validate(this.state.firstName, this.state.lastName, this.state.phoneNum, this.state.email);
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
                            <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                <Control.text model=".firstName" id="firstName" name="firstName"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, 
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstName"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastName" id="lastName" name="lastName"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".lastName"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                <Col md={10}>
                                    <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
                                        placeholder="Phone number"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(10),
                                            maxLength: maxLength(15),
                                            isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".phoneNum"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 10 numbers',
                                            maxLength: 'Must be 15 numbers or less',
                                            isNumber: 'Must be a number'
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required,
                                            validEmail
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid email address'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 4, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox
                                                model=".agree"
                                                name="agree"
                                                className="form-check-input"
                                            /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>By Phone</option>
                                        <option>By Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".feedback" id="feedback" name="feedback"
                                        rows="12"
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                                
                                
                                {/* <Form onSubmit={this.handleSubmit}>
                                    <FormGroup row>
                                        <Label htmlFor="firstName" md={2}>First Name</Label>
                                        <Col md={10}>
                                            <Input type="text" id="firstName" name="firstName"
                                            placeholder="First Name"
                                            value={this.state.firstName}
                                            onChange={this.handleInputChange}
                                            onBlur ={this.handleBlur("firstName")} 
                                            invalid = {errors.firstName}/>
                                            <FormFeedback> {errors.firstName}</FormFeedback>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="lastName" md={2}>Last Name</Label>
                                        <Col md={10}>
                                            <Input type="text" id="lastName" name="lastName"
                                            placeholder="Last Name"
                                            value={this.state.lastName}
                                            onChange={this.handleInputChange} 
                                            onBlur ={this.handleBlur("lastName")}
                                            invalid = {errors.lastName}/>
                                            <FormFeedback> {errors.lastName}</FormFeedback>
                                        </Col>                        
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                        <Col md={10}>
                                            <Input type="tel" id="phoneNum" name="phoneNum"
                                            placeholder="Phone number"
                                            value={this.state.phoneNum}
                                            onChange={this.handleInputChange}
                                            onBlur ={this.handleBlur("phoneNum")} 
                                            invalid = {errors.phoneNum}/>
                                            <FormFeedback> {errors.phoneNum}</FormFeedback>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="email" md={2}>Email</Label>
                                        <Col md={10}>
                                            <Input type="email" id="email" name="email"
                                            placeholder="Email"
                                            value={this.state.email}
                                            onChange={this.handleInputChange} 
                                            onBlur ={this.handleBlur("femail")}
                                            invalid = {errors.email}/>
                                            <FormFeedback> {errors.email}</FormFeedback>
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
                                </Form> */}
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        );
    }
}



export default Contact;