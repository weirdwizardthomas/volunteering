import React from "react";

import VolunteerListItem from "./volunteer_list_item";


class VolunteerList extends React.Component {
    static URL = '/volunteers';

    render() {
        return (
            <div>
                <h1>Volunteers</h1>

                <ul>
                    {this.props.volunteers.map(v => (
                        <VolunteerListItem key={v.id} item={v}/>
                    ))}
                </ul>

            </div>);
    }
}

export default VolunteerList;