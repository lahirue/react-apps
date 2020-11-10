import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody,  Label, Col, Row } from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component { 
    constructor (props){
        super (props);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            isModalOpen: false
          };

          this.props = props;
    }

    handleSubmit (values) {
        console.log("Current State : " + JSON.stringify(values));
        console.log(this.props);
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
    
    render () {
        console.log("Comment form ");
        console.log(this.props);
        return (
            <div>
            <Button outline onClick={this.toggleModal}><span className="fa fa-edit fa-lg"></span> Comment</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={2} >Rating</Label>
                                <Col md={10}>
                                <Control.select model=".rating" name="rating" 
                                    className = "form-control"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                   </Control.select>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="name" md={2} >Your Name</Label>
                                <Col md={10}>
                                    <Control.text model=".name" id="name" name="name"
                                     className="form-control"
                                     placeholder="Your Name"
                                     className="form-control"
                                     validators={{
                                         required, minLength: minLength(3), maxLength: maxLength(15)
                                     }}
                                      />
                                 <Errors
                                     className="text-danger"
                                     model=".name"
                                     show="touched"
                                     messages={{
                                         required: 'Required',
                                         minLength: ' Must be greater than 2 characters',
                                         maxLength: ' Must be 15 characters or less'
                                     }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={2} >Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment"  id="comment" name="comment"
                                     rows ="12"
                                     className="form-control"
                                     placeholder="Comment" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10,offset:2}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>

                        </LocalForm>
                    </ModalBody>
            </Modal>
            </div>
        );
    };
}

export default CommentForm;