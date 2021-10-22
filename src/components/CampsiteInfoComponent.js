import React from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

   
//SEE RenderComments FUNCTION FOR NOTES.
    function RenderCampsite({campsite}) {
        return(
            <div className="col-md-5 m-1">
               <Card>
                    <CardImg top src={campsite.image} alt={campsite.name}/>
                    <CardBody>
                        {/* <CardTitle>{campsite.name}</CardTitle> */}
                        <CardText> {campsite.description}</CardText>
                    </CardBody>
                    
                </Card> 
            </div>
        );
    }
// the comments parameter for RenderComments is not the same as the props from main.  it is actually from the custom attribute from the Contaner component CampsiteInfo below.
    function RenderComments({comments}) {
        if(comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments!</h4>
                    {comments.map((comment) => {
                        return(
                            <div key={comment.id}>
                                <p>{comment.text}</p>
                                <p>{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </div>
                        );
                    })}
                </div>
            );
        }
        return(
            <div>

            </div>
        );
    }

   

    function CampsiteInfo(props) {

       

        if(props.campsite) {
            
            return (
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <h2>{props.campsite.name}</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <RenderCampsite campsite={props.campsite} />
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            );
            
            // return (
            //     // <div className="container"> we usually need this but in this case you dont because it will mess with the layout.  
            //     <div className="container">
            //             <div className="row">
            //             <RenderCampsite campsite = {props.campsite} />
            //             <RenderComments comments = {props.comments} />
                    
            //         </div>
            //     </div>
            // );
        } else return <div/>
    }


export default CampsiteInfo;