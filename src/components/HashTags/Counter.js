import React, { Component } from 'react';
import { connect } from 'react-redux';
//eslint-disable-next-line
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';





class Counter extends Component {
    constructor(props) {
        super(props);

        //   this.props.TotalRecords();
        this.props.loggedUserName();

    }

    render() {

        if (this.props.total === 1) {
            return <NavLink tag={Link} className="text-dark" to="/Logout"> Logout</NavLink>
        }
        else { return <NavLink tag={Link} className="text-dark" to="/Login1"> Login</NavLink> }

    }
}
const mapStateToProps = (state) => {
    console.log("statess" + JSON.stringify(state));
    // const { hashTags } = state
    console.log("json" + JSON.stringify(state.login));
    // alert(hashTags.loggedUserName);
    //alert("srtate" + state.login.isLogin)
    return { total: state.login.isLogin }
    //if (state.login.isLogin === 1) {
    //    return {
    //        total: "LogOut"
    //    }
    //}
    //else {
    //    return {
    //        total: "LogIn"
    //    }
    //}
    //if (/*state.login.loggedUserName !== "" &&*/ state.login.loggedUserName === "undefined" ) {
    //    return {
    //        total: "Logout"
    //    }
    //}
    //else {
    //    return {
    //        total: "Login"
    //    }
    //}
    //return {
    //    //  total: hashTags.totalRecords
    //    total: state.login.loggedUserName

    //}
}
const mapDispatchToProps = (dispatch) => {
    return {
        loggedUserName: () => { dispatch({ type: 'LOGGED_USER' }) }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Counter)