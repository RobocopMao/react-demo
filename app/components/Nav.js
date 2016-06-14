import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { Link } from 'react-router';

const styles = {
	nav: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0
	}
};

const Nav = React.createClass({

	getInitialState() {
		return {open: null};
	},

	handleOpenMenu() {
		return this.setState({open: true});
	},

	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<AppBar
					style={styles.nav}
					title="Feed Reader"
					iconElementLeft={
						<IconMenu
							iconButtonElement={
								<IconButton><MenuIcon /></IconButton>
							}
						/>
					}
					iconElementRight={
						<div>
							{/*<IconMenu
								iconButtonElement={
									<IconButton><RefreshIcon /></IconButton>
								}
								onClick={this.handleRefreshClick}
							/>*/}
				      <IconMenu
				        iconButtonElement={
				          <IconButton><MoreVertIcon /></IconButton>
				        }
								anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
      					targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
								onClick={this.handleOpenMenu}
								open={this.state.open}
				      >
								<MenuItem value="1" primaryText="Refresh" />
					      <MenuItem value="2" primaryText="Settings" />
					      <MenuItem value="3" primaryText="Help" />
					      <MenuItem value="4" primaryText="Sign out" />
							</IconMenu>
						</div>
	    		}
				/>
			</MuiThemeProvider>
		);
	}
});

export default Nav;
