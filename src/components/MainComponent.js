import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import '../App.css';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { addComment, fetchDishes } from '../redux/ActionCreators';

import DishDetail from './DishdetailComponent'

import {Switch,Route,Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments : state.comments,
      promotions : state.promotions,
      leaders : state.leaders
    }
}

const mapDispatchToProps = dispatch => (
  {
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
});


class Main extends Component {

  constructor (props) {
     super (props);
 
  }

  componentDidMount() {
    this.props.fetchDishes();
  }
  
   
  render () {
    const HomePage = () => {
      return (
        <Home 
        dish={this.props.dishes.dishes.filter((item) => item.featured)[0]}
        dishesLoading={this.props.dishes.isLoading}
        dishesErrMess={this.props.dishes.errMess}
        promotion={this.props.promotions.filter((item) => item.featured)[0]}
        leader={this.props.leaders.filter((item) => item.featured)[0]}
    />
        
      );
    }

    const DishWithId = ({match}) => {
      return (
        <DishDetail dish= {this.props.dishes.filter((item) => item.id === parseInt(match.params.dishId,10))[0]} 
        isLoading={this.props.dishes.isLoading}
        errMess={this.props.dishes.errMess}
        comments = {this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        addComment={this.props.addComment}
        /> // convert to base 10 integer comming as string
        );
    }

  return (
    <div>
      <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />}/>
          <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
          <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Redirect to="/home" />
        </Switch>
      <Footer />

    </div>
  );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
