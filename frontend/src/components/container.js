import React from 'react';

import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';

import OrganisationList from './organisation_list';
import ProjectList from './project_list';
import NavigationBar from './navigation_bar';
import VolunteerList from "./volunteer_list";
import VolunteerPage from "./volunteer";

import Volunteer from "../models/volunteer";
import Project from "../models/project";
import Organisation from "../models/organisation";

class Container extends React.Component {
    constructor(props) {
        super(props);

        const timestamp = Date.now();
        const email = "koristka.tom@gmail.com";
        const image = 'assets/images/img.png';

        this.state = {
            organisations: [
                new Organisation(1, 'org1', email, 'description1', 'google.com', ['a', 'b', 'c'], image),
                new Organisation(2, 'org2', email, 'description2', 'google.com', ['a', 'b', 'c'], image),
                new Organisation(3, 'org3', email, 'description3', 'google.com', ['a', 'b', 'c'], image),
                new Organisation(4, 'org4', email, 'description4', 'google.com', ['a', 'b', 'c'], image),
            ],
            projects: [
                new Project(1, 'proj1', 'desc1', 'org1', 'google.com', image),
                new Project(2, 'proj2', 'desc2', 'org2', 'google.com', image),
                new Project(3, 'proj3', 'desc3', 'org3', 'google.com', image),
                new Project(4, 'proj4', 'desc4', 'org4', 'google.com', image),
            ],
            volunteers: [
                new Volunteer(1, 'vol1', email, 'desc1', image, timestamp),
                new Volunteer(2, 'vol2', email, 'desc2', image, timestamp),
                new Volunteer(3, 'vol3', email, 'desc3', image, timestamp),
                new Volunteer(4, 'vol4', email, 'desc4', image, timestamp),
            ]
        };
    }

    render() {
        return <div>
            <NavigationBar/>
            <Router>
                <Switch>
                    <Route path={OrganisationList.URL}><OrganisationList
                        organisations={this.state.organisations}/></Route>
                    <Route path={ProjectList.URL}> <ProjectList projects={this.state.projects}/> </Route>
                    <Route path={VolunteerList.URL}><VolunteerList volunteers={this.state.volunteers}/> </Route>
                    <Route path={VolunteerPage.URL}><VolunteerPage/></Route>
                </Switch>
            </Router>
        </div>;
    }
}

export default Container;