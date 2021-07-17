import React from 'react';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Button from "@material-ui/core/Button";
import ListItemMenu from "./list_item_menu";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LinkIcon from '@material-ui/icons/Link';

class ProjectListItem extends React.Component {

    static DEFAULT_PROFILE_IMAGE = '/assets/images/img.png';
    static PROFILE_IMAGE_TITLE = 'Project';

    constructor(props) {
        super(props);

        this.emailTarget = `mailto:${this.props.item.email}`; // todo extract this constant
    }

    render() {
        return <Card variant="outlined" style={{width: "250px"}}>
            <CardMedia
                style={{height: "250px", width: "250px", paddingTop: "2%"}}
                image={this.props.item.image ? this.props.item.image : ProjectListItem.DEFAULT_PROFILE_IMAGE}
                title={ProjectListItem.PROFILE_IMAGE_TITLE}/>

            <CardContent>
                <h1>{this.props.item.name}</h1>
                <h2>Run by {this.props.item.organisation}</h2>
                <p>{this.props.item.description}</p>
                <p><a href={this.props.item.website}>Website</a></p>
            </CardContent>
            {/*do make actions collapseable?*/}

            <CardActions>
                <IconButton href=""><ShareIcon/></IconButton>
                <IconButton href={this.emailTarget}><MailOutlineIcon/></IconButton>
                <Button href={this.profileLink}>Details</Button>
                <IconButton><ListItemMenu/></IconButton>
            </CardActions>
        </Card>
    }
}

export default ProjectListItem;