import React, {Component} from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    
    constructor (props){
        super (props);
        this.state = {
            isNavOpen : false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav () {
        this.setState ({
            isNavOpen : !this.state.isNavOpen
        });
    }

    render () {
        return (
            <>
       <Navbar dark expand="md">
         <div className="container">
             <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/"> 
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/University_of_Peradeniya_crest.png/220px-University_of_Peradeniya_crest.png"
                 height="30" width="41" alt= "No img" />
            </NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
         </div>
       </Navbar>
       <Jumbotron>
           <div className="container">
               <div className="row row-header">
                <div className="col-12 col-sm-6">
                    <h1>Ristone Con Fusion</h1>
                    <p>we take inspiration from the World's and create a unique fashion experince. Our lips making creation</p>
                </div>
               </div>
           </div>
       </Jumbotron>
            </>
        );
    }
}

export default Header;