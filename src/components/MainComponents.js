import React, { Component } from 'react';

import Directory from './DirectoryComponent';
import {CAMPSITES} from '../shared/campsites';
import CampsiteInfo from "./CampsiteInfoComponent";
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

import Contact from './ContactComponent';

import About from './AboutComponent';

//how to import component from shared folder?? 
 //since MainComponent.js is in components folder which does not have Comments.js file we have to back out of it.  we do this by .. notation.
import {COMMENTS, COMMENTs} from '../shared/comments';
import {PARTNERS} from '../shared/partners';
import {PROMOTIONS} from '../shared/promotions'
class Main extends Component {
    
    constructor (props) {
        super (props);
        this.state = {
            campsites: CAMPSITES,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS,
            
        };
    }

    //from previous codes
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         campsites:CAMPSITES,
            // selectedCampsite: null
    //     }
    // }
    
    // onCampsiteSelect(campsiteId) {
    //     this.setState({selectedCampsite: campsiteId
    //     });
    // }  //this method was cut from Directory component

    render() {
//arrow fxn is used because of the this. keyword.  it will be undefined if we dont use arrow fxn for the const HomePage.
 //.featured is the key to choose which component to display.  check out campsite.js to see which object has feature set to true.  that will be the displayed object.  
const HomePage = () => {
            return (
                <Home
                campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
                promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                partner={this.state.partners.filter(partner => partner.featured)[0]}
                />
            );
        };


const CampsiteWithId = ({match}) => {
            return (
                <CampsiteInfo 
                    campsite={this.state.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
                    comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
                />
            );
};
//if you need to pass state data as a props to a component then us render syntax as in line63 otherwise we can use component={componentName} syntax
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route path='/directory/:campsiteId' component={CampsiteWithId} />
                    <Route path='/aboutus' render={() => <About partners={this.state.partners} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );

        // return (
        //     <div>
        //         <Header />
        //         <Directory campsites={this.state.campsites} onClick = {campsiteId => this.onCampsiteSelect(campsiteId)}/>
        //         <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]}/>
        //         <Footer />
        //     </div>
        // );
    }
}

export default Main;