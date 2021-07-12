import React from 'react';
import OrganisationListItem from "./organisation_list_item";

class OrganisationList extends React.Component {
    static URL = '/organisations';

    render() {
        return (
            <div>
                <h1>Organisations</h1>
                <ul>
                    {this.props.organisations.map(o => (
                        <OrganisationListItem key={o.id} item={o}/>
                    ))}
                </ul>
            </div>);
    }
}

export default OrganisationList;