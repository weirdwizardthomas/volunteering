import React from 'react';

import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';

import OrganisationList from './organisation_list';
import ProjectList from './project_list';
import NavigationBar from './navigation_bar';
import VolunteerList from "./volunteer_list";
import VolunteerPage from "./volunteer";

class Container extends React.Component {
    constructor(props) {
        super(props);

        const timestamp = Date.now();
        const email = "koristka.tom@gmail.com";

        const image = 'assets/images/img.png';
        this.state = {
            organisations: [
                {
                    id: 1,
                    name: 'org1',
                    description: 'desc1',
                    projects: ['a', 'b', 'c']
                },
                {
                    id: 2,
                    name: 'org2',
                    description: 'desc2',
                    projects: ['d', 'e', 'f']
                },
                {
                    id: 3,
                    name: 'org3',
                    description: 'desc3',
                    projects: ['g', 'h', 'i']
                },
                {
                    id: 4,
                    name: 'org4',
                    description: 'desc4',
                    projects: ['j', 'k', 'l']
                }
            ],
            projects: [
                {
                    id: 1,
                    name: 'proj1',
                    description: 'desc1',
                    organisation: 'org1'
                },
                {
                    id: 2,
                    name: 'proj2',
                    description: 'desc2',
                    organisation: 'org2'
                },
                {
                    id: 3,
                    name: 'proj3',
                    description: 'desc3',
                    organisation: 'org3'
                },
                {
                    id: 4,
                    name: 'proj4',
                    description: 'desc4',
                    organisation: 'org4'
                }
            ],
            volunteers: [
                {
                    id: 1,
                    name: 'vol1',
                    description: 'desc1',
                    image: image,
                    created: timestamp,
                    email: email
                },
                {
                    id: 2,
                    name: 'vol2',
                    description: 'desc2',
                    image: image,
                    created: timestamp,
                    email: email
                },
                {
                    id: 3,
                    name: 'vol3',
                    description: 'desc3',
                    image: image,
                    created: timestamp,
                    email: email
                },
                {
                    id: 4,
                    name: 'vol4',
                    description: 'desc4',
                    image: image,
                    created: timestamp,
                    email: email
                }
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