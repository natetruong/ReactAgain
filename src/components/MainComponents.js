import React, { Component } from 'react';

import Directory from './DirectoryComponent';
import {CAMPSITES} from '../shared/campsites';
import CampsiteInfo from "./CampsiteInfoComponent";
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

import Contact from './ContactComponent';

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

        const HomePage = () => {
            return (
                <Home
                campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
                promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                partner={this.state.partners.filter(partner => partner.featured)[0]}
                />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
                    <Route exact path='/contactus' component={Contact} />
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