import React from "react";

import ProjectListItem from "./project_list_item";

class ProjectList extends React.Component {
    static URL = '/projects';

    render() {
        return (
            <div>
                <h1>Projects</h1>
                <ul>
                    {this.props.projects.map(p => (
                        <ProjectListItem key={p.id} item={p}/>
                    ))}
                </ul>
            </div>);
    }
}

export default ProjectList;