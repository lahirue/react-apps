import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, ListGroup, ListGroupItem,ListGroupItemHeading,ListGroupItemText } from 'reactstrap';
import {Link} from 'react-router-dom';

    function RenderComments ({comments}) {
        let commentList = null;
        if (comments != null) {
        
            commentList = comments.map((comment) =>{ 
                return (
                    <ListGroupItem key={comment.id}>
                      <ListGroupItemHeading>{comment.comment}</ListGroupItemHeading>
                      <ListGroupItemText>
                      {comment.user} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} 
                      </ListGroupItemText>
                    </ListGroupItem>
                
                   );
            });
     
        } else {
            commentList =  (<div> </div>);
        }
        return commentList; 
    }

    function RenderDish ({dish}) {
        if (dish != null) {
            return (
                <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                          <CardTitle > {dish.name}</CardTitle>
                          <CardText> {dish.description} </CardText>
                      </CardBody>
                </Card>
            );
        } else {
            return (<div></div>);
        }
    }

    const DishDetails = (props) => {
        return (
        <div className ="container">
               <div className="row" >
                    <Breadcrumb>
                        <BreadcrumbItem> 
                        <Link to="/home" > Home </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem> 
                        <Link to="/menu" > Menu </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active> {props.dish.name} </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
            <div className="row">
                <div className="col-xs col-sm col-md-5 m-1">
                    <RenderDish dish = {props.dish} />
                </div>
                <div className="col-xs col-sm col-md-5 m-1">
                <ListGroup>
                    <RenderComments comments = {props.comments} />  
                    </ListGroup>
                </div>

            </div>
           </div>
        );
    }


export default DishDetails;

