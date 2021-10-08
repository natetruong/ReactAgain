import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Directory extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedCampsite: null
        }; 
    } 

    onCampsiteSelect(campsite) {
        this.setState({selectedCampsite: campsite
        });
    }

    renderSelectedCampsite(campsite) {
        if (campsite) {
            return (
                <Card>
                    <CardImg>
                        <CardBody>
                            <CardTitle>{campsite.name}</CardTitle>
                            <CardText> {campsite.description}</CardText>
                        </CardBody>
                    </CardImg>
                </Card>
            );
        }
        return <div/>
    }
    render() {
        const directory = this.props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col">
                    <img src={campsite.image} alt={campsite.name} />
                    <h2>{campsite.name}</h2>
                    <p>{campsite.description}</p>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <div className="row">
                    {this.renderSelectedCampsite(this.state.selectedCampsite)}
                </div>
            </div>
        );
    }
}

export default Directory;