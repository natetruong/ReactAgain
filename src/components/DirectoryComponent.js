import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Directory extends Component {
    // constructor (props) {
    //     super(props);
    //     this.state = {
    //         // selectedCampsite: null  why removing this?  we dont use this anymore.  we moved it to Main
    //     }; 
    // } 

    // onCampsiteSelect(campsite) {
    //     this.setState({selectedCampsite: campsite
    //     });
    // }  we also moved this method to Main conponent because we are turning Directory component into a presentational component.  

    // renderSelectedCampsite(campsite) {
    //     if (campsite) {
    //         return (
    //             // <Card>
    //             //     <CardImg top src={campsite.image} alt={campsite.name}/>
    //             //     <CardBody>
    //             //         <CardTitle>{campsite.name}</CardTitle>
    //             //         <CardText> {campsite.description}</CardText>
    //             //     </CardBody>
                    
    //             // </Card>
    //         );
    //     }
    //     return <div/>
    // }
    render() {
        const directory = this.props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card  onClick={() => this.props.onClick(campsite.id)}>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                
                {/* <CampsiteInfo campsite={this.state.selectedCampsite}/> */}
                
            </div>
        );
    }
}

export default Directory;