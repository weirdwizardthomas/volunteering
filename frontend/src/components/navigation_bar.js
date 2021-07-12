import React from 'react';

import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Form, FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

import ProjectList from "./project_list";
import VolunteerList from "./volunteer_list";
import OrganisationList from "./organisation_list";

class NavigationBar extends React.Component {
    render() {
        return <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Lend a hand</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link
                        href="#home"
                        activeClassName="active"
                    >
                        Home
                    </Nav.Link>
                    <Nav.Link
                        href={OrganisationList.URL}
                        activeClassName="active"
                    >
                        Organisations
                    </Nav.Link>
                    <Nav.Link
                        href={ProjectList.URL}
                        activeClassName="active"
                    >
                        Projects
                    </Nav.Link>
                    <Nav.Link
                        href={VolunteerList.URL}
                        activeClassName="active"
                    >
                        Volunteers
                    </Nav.Link>
                    <NavDropdown title="Settings" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Account</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Appearance</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Language</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4">Log in</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    }
}

export default NavigationBar;