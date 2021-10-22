import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';

import { Link } from 'react-router-dom';

function RenderDirectoryItem ({campsite}) {
    
    
        return (
            <Card>
                <Link to={`/directory/${campsite.id}`}>
                    <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                    <CardImgOverlay>
                        <CardTitle>{campsite.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>

    //from single page application
    // return (
    //     // <Card  onClick={() =>onClick(campsite.id)}>
    //     <Card>
    //                     <CardImg width="100%" src={campsite.image} alt={campsite.name} />
    //                     <CardImgOverlay>
    //                         <CardTitle>{campsite.name}</CardTitle>
    //                     </CardImgOverlay>
    //                 </Card>
    );
}


function Directory (props) {
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
    
        const directory = props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <RenderDirectoryItem campsite = {campsite} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Directory</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Directory</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {directory}
                </div>
            </div>
        );

        // return (
        //     <div className="container">
        //         <div className="row">
        //             {directory}
        //         </div>
                
        //         {/* <CampsiteInfo campsite={this.state.selectedCampsite}/> */}
                
        //     </div>
        // );
    
}

export default Directory;



