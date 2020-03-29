import React, {Component, useState} from 'react';
import logo from "./../../img/accessCycle.png";
import "./../../vendor/bootstrap/css/bootstrap.min.css";
import "./../../css/agency.min.css";
import "./../../css/style.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const activeStyle = {color: "#fed136"};
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div
              id="mainNav"
              style={{backgroundColor: "#484848", height: "12%", fontSize: "90%"}}>
            <Navbar dark expand="md" class="navbar navbar-expand-lg navbar-dark fixed-top" >
                <NavbarBrand href="http://all.rit.edu" style={{marginLeft: "60px"}}>
                    <img
                        src={logo}
                        height="120" width="120"
                        style={{
                            paddingRight: "20px",
                            paddingBottom: "10px",
                            paddingTop: "10px",
                            marginTop: "-10px"
                        }}
                        alt="Computing Accessibility"
                    ></img>

                    Accessibility Learning Labs
                </NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem style={{paddingLeft:"400px"}}> </NavItem>
                        <NavItem class="nav-link js-scroll-trigger collapse navbar-collapse"
                                 id="navbarResponsive"
                                 style={{fontSize: "120%"}}>
                            <NavLink
                                onClick={props.handleHome}
                                href="http://all.rit.edu">

                                <ul className="navbar-nav text-uppercase ml-auto">
                                    <li className="nav-item">
                                        Home
                                    </li>
                                </ul>
                            </NavLink>
                        </NavItem>
                        <NavItem style={{fontSize: "120%"}}
                                 class="nav-link js-scroll-trigger active collapse navbar-collapse"
                                 id="navbarResponsive">
                            <NavLink onClick={props.handleAbout}
                                     style={props.count===0? activeStyle: null}>
                                <ul className="navbar-nav text-uppercase ml-auto" >
                                    <li className="nav-item" >
                                        About
                                    </li>
                                </ul>
                            </NavLink>
                        </NavItem>
                        <NavItem style={{fontSize: "120%"}}
                                 class="nav-link js-scroll-trigger active collapse navbar-collapse"
                                 id="navbarResponsive">
                            <NavLink onClick={props.handleReading}
                                     style={props.count===1? activeStyle: null}>
                                <ul className="navbar-nav text-uppercase ml-auto">
                                    <li className="nav-item">
                                        Reading
                                    </li>
                                </ul>
                            </NavLink>
                        </NavItem>
                        <NavItem style={{fontSize: "120%"}}
                                 class="nav-link js-scroll-trigger active collapse navbar-collapse"
                                 id="navbarResponsive">
                            <NavLink onClick={props.handleGame}
                                     style={props.count===2? activeStyle: null}>
                                <ul className="navbar-nav text-uppercase ml-auto">
                                    <li className="nav-item">
                                        Game
                                    </li>
                                </ul>
                            </NavLink>
                        </NavItem>
                        <NavItem style={{fontSize: "120%"}}
                                 class="nav-link js-scroll-trigger active collapse navbar-collapse"
                                 id="navbarResponsive">
                            <NavLink onClick={props.handleVideo}
                                     style={props.count===3? activeStyle: null}>
                                <ul className="navbar-nav text-uppercase ml-auto">
                                    <li className="nav-item">
                                        Video
                                    </li>
                                </ul>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}


export default Header;