import React, { useState } from 'react';
import { Menu, MenuItem, Button, ListItemIcon, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { NavLink, withRouter } from 'react-router-dom';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LockOpenIcon from '@material-ui/icons/LockOpen';

const StyledMenu = withStyles({
	paper: {
		border: '1px solid #d3d4d5',
		margin: '8px',
		width: '75px',
	},
})((props) => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'center',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'center',
		}}
		{...props}
	/>
));

const StyledMenuItem = withStyles((theme) => ({
	root: {
		textAlign: 'center',
		'&:focus': {
			backgroundColor: '#216fdb',
			'& .MuiListItemText-primary': {
				color: theme.palette.common.white,
			},
		},
		'&:hover': {
			backgroundColor: '#76a0d9',
		},
	},
}))(MenuItem);

function DropDown() {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className="dropdown">
			<Button
				className="dropdown-btn"
				aria-controls="customized-menu"
				aria-haspopup="true"
				variant="contained"
				size="large"
				onClick={handleClick}
			>
				<ExpandMoreIcon />
				{/* <i className="fas fa-user"></i> */}
			</Button>
			<StyledMenu
				id="customized-menu"
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<StyledMenuItem>
					<ListItemIcon>
						<i class="fas fa-moon"></i>
					</ListItemIcon>
				</StyledMenuItem>
				<StyledMenuItem>
					<NavLink to="/login">
						<ListItemIcon>
							<LockOpenIcon fontSize="small" />
						</ListItemIcon>
					</NavLink>
				</StyledMenuItem>
			</StyledMenu>
		</div>
	);
}

export default withRouter(DropDown);
