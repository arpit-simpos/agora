

import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
//import { connect } from 'react-redux';
import Counter from '../components/HashTags/Counter';
//import { useSelector } from 'react-redux';




//let totalRecords;



//let loggedUserName = useSelector(state => state.loggedUserName)



 export default class NavMenu extends Component {

    static displayName = NavMenu.name;

    constructor(props,state) {
        super(props);
        console.log("props" + state)
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
     //   let logged

     }


    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

     loadNav() {
         //eslint-disable-next-line
         var loggedUserName = localStorage.getItem("LoggedUserName");

         //  alert(loggedUserName);
       
         var isLogin = <Counter />
        //  alert("asdasd" + isLogin)
         if (isLogin ===1) {
             return (
                 <ul className="navbar-nav flex-grow">
                     <NavItem>
                         <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                     </NavItem>
                     <NavItem>
                         <NavLink tag={Link} className="text-dark" to="/Dashboard"> Dashboard </NavLink>
                     </NavItem>
                 {/*    <NavItem>*/}
                 {/*        <NavLink className="text-dark">{localStorage.getItem("LoggedUserName")}</NavLink>*/}
                 {/*     */}{/*   <NavLink className="text-dark">{loggedUserName}</NavLink>*/}
                     {/*</NavItem>*/}
                   {/*  <NavLink tag={Link} className="text-dark" to="/dashboard"><Counter /></NavLink>*/}
                   
                     {/*<NavItem>*/}
                      
                     {/*</NavItem>*/}
                 </ul>
             )

         }
         else {
             return(
             <ul className="navbar-nav flex-grow">
                 <NavItem>
                     <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                 </NavItem>
           
                 </ul>)
         }
     }



     render() {

        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">Agora.io Demo</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                           
                                {/*<NavItem>*/}
                                {/*    <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>*/}
                                {/*</NavItem>*/}
                                {/*<NavItem>*/}
                                {/*    <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>*/}
                                {/*</NavItem>*/}
                                {/*<NavItem>*/}
                             
                                {/*</NavItem>*/}
            <Counter/>

                            {this.loadNav()}
                              
                                

                          
                                   
                                                      
                        </Collapse>
                    </Container>
                </Navbar>
                {/* <a href="/Users/adtechnology/Desktop/student.html">das</a> */}
                {/* <a href="../components/Login/student.html" className="btn btn-primary mr-2 float-right">

Dashboard
</a> */}

            </header>
        );
    }
}


