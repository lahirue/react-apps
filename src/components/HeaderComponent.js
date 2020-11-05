import React, {Component} from 'react';
import {Navbar, NavbarBrand, Jumbotron} from 'reactstrap';

class Header extends Component {
    render () {
        return (
            <>
       <Navbar dark >
         <div className="container">
            <NavbarBrand href="/"> This is navbar brand </NavbarBrand>
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