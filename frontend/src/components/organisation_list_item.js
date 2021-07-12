import React from 'react';

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import IconButton from "@material-ui/core/IconButton";

import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Button from "@material-ui/core/Button";

import ListItemMenu from "./list_item_menu";

class OrganisationListItem extends React.Component {

    static DEFAULT_PROFILE_IMAGE = '/assets/images/img.png';
    static PROFILE_IMAGE_TITLE = 'Organisation';

    render() {
        return (
            <Card variant="outlined" style={{width: "250px"}}>
                <CardMedia
                    style={{height: "250px", width: "250px", paddingTop: "2%"}}
                    image={this.props.item.image ? this.props.item.image : OrganisationListItem.DEFAULT_PROFILE_IMAGE}
                    title={OrganisationListItem.PROFILE_IMAGE_TITLE}
                />

                <CardContent>
                    <h1>{this.props.item.name}</h1>
                    <p>{this.props.item.description}</p>
                    <p>Projects: {this.props.item.projects.length}</p>
                </CardContent>

                <CardActions>
                    <IconButton href=""><FavoriteBorderIcon/></IconButton>
                    <IconButton href=""><ShareIcon/></IconButton>
                    <Button href="">Details</Button>
                    <IconButton><ListItemMenu/></IconButton>
                </CardActions>
            </Card>
        );
    }
}

export default OrganisationListItem;