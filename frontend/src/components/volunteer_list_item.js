import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';

import ShareIcon from '@material-ui/icons/Share';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ListItemMenu from "./list_item_menu";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

// image, next to it name and brief description
// below  it link to profile

class VolunteerListItem extends React.Component {

    static PROFILE_IMAGE_TITLE = 'Profile';

    constructor(props) {
        super(props);
        this.emailTarget = `mailto:${this.props.item.email}`; // todo extract this constant
        this.profileLink = `volunteer/${this.props.item.id}`;
    }

    render() {
        return (
            <Card variant="outlined" style={{width: "250px"}}>
                <CardMedia
                    style={{height: "250px", width: "250px", paddingTop: "2%"}}
                    image={this.props.item.image ? this.props.item.image : VolunteerListItem.DEFAULT_PROFILE_IMAGE}
                    title={VolunteerListItem.PROFILE_IMAGE_TITLE}/>

                <CardContent>
                    <h1>{this.props.item.name}</h1>
                    <p>{this.props.item.description}</p>
                    <p>{this.emailTarget}</p>
                </CardContent>

                {/*do make actions collapseable?*/}
                <CardActions>
                    <IconButton href=""><ShareIcon/></IconButton>
                    <IconButton href={this.emailTarget}><MailOutlineIcon/></IconButton>
                    <Button href={this.profileLink}>Details</Button>
                    <IconButton><ListItemMenu/></IconButton>
                </CardActions>
            </Card>
        );
    }
}

export default VolunteerListItem;