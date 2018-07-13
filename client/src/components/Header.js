import React, { Component } from "react";
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
  DropdownItem
} from "reactstrap";
import api from "../api";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    api.loadUser();
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleLogoutClick(e) {
    api.logout();
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Inspire.AI</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about/">About Inspire</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/LaureDas/inspire">
                  Creator's GitHub
                </NavLink>
              </NavItem>
              <NavItem>
                {!api.isLoggedIn() && <NavLink href="/signup">Signup</NavLink>}
              </NavItem>
              <NavItem>
                {!api.isLoggedIn() && <NavLink href="/login">Login</NavLink>}
              </NavItem>
              <NavItem>
                {api.isLoggedIn() && (
                  <NavLink href="/" onClick={e => this.handleLogoutClick(e)}>
                    Logout
                  </NavLink>
                )}
              </NavItem>
              <NavItem>
                <NavLink href="/secret">Secret</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
