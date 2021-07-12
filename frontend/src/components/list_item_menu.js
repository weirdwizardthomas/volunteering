import React from 'react';

import IconButton from '@material-ui/core/IconButton';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import MoreVertIcon from '@material-ui/icons/MoreVert';


const ITEM_HEIGHT = 48;

class ListItemMenu extends React.Component {

    static OPTIONS = [
        'Report'
    ];

    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null
        }
    }

    handleClick(event) {
        this.setState({anchorEl: event.currentTarget});
    }

    handleClose() {
        this.setState({anchorEl: null});
    }

    render() {
        return <div>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={this.handleClick.bind(this)}
            >
                <MoreVertIcon/>
            </IconButton>

            <Menu
                id="long-menu"
                anchorEl={this.state.anchorEl}
                keepMounted
                open={Boolean(this.state.anchorEl)}
                onClose={this.handleClose.bind(this)}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {ListItemMenu.OPTIONS.map((option) =>
                    <MenuItem
                        key={option}
                        /*selected={option === 'Report'}*/
                        onClick={this.handleClose.bind(this)}
                    >
                        {option}
                    </MenuItem>)}
            </Menu>
        </div>;
    }
}

export default ListItemMenu;
