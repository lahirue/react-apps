import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem,ListGroupItemHeading,ListGroupItemText } from 'reactstrap';
   
    function RenderComments ({dish}) {
        let commentList = null;
        if (dish != null && dish.comments != null) {
        
            commentList = dish.comments.map((comment) =>{ 
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
            <div className="row">
                <div className="col-xs col-sm col-md-5 m-1">
                    <RenderDish dish = {props.dish} />
                </div>
                <div className="col-xs col-sm col-md-5 m-1">
                <ListGroup>
                    <RenderComments dish = {props.dish} />
                    </ListGroup>
                </div>

            </div>
           
        );
    }


export default DishDetails;

