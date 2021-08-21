import React, {Component} from 'react'
import {Navbar, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, Collapse, NavbarToggler} from 'reactstrap'

class Heading extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false //used to toggle whether to display on mobile phones
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <Navbar color = "light" light expand="md">
                <NavbarBrand href = "#">My Blog</NavbarBrand>
                <NavbarToggler onClick = {this.toggle}/>
                <Collapse isOpen = {this.state.isOpen} navbar>
                    <Nav className = "mr-auto" navbar>
                        <NavItem>
                            <NavLink href = "/">New Article</NavLink>
                        </NavItem>
                    </Nav>
                    <UncontrolledDropdown>
                        <DropdownToggle new caret>
                            Options
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Login
                            </DropdownItem>
                            <DropdownItem>
                                Logout
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Collapse>
            </Navbar>
        );
    }
}
export default Heading;