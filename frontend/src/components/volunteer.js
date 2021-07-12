import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

class VolunteerPage extends React.Component {

    static URL = '/volunteer/:id';
    static IMAGE = '/assets/images/img.png';
    static PROFILE_IMAGE_TITLE = 'Profile';

    render() {
        return <div>
            <Card variant="outline" style={{width: "250px"}}>
                <CardMedia
                    style={{height: "250px", width: "250px", paddingTop: "2%"}}
                    image={VolunteerPage.DEFAULT_PROFILE_IMAGE}
                    title={VolunteerPage.PROFILE_IMAGE_TITLE}/>

                <CardContent>
                    <h1>Name</h1>
                    <p>Description</p>
                </CardContent>

            </Card>
        </div>;
    }
}

export default VolunteerPage;