import React from 'react';
import Nav from './components/Nav';
import HomeList from './components/HomeList';
import ListItemContent from './components/ListItemContent';
// import { Link } from 'react-router';

const styles = {
	rootContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	},
	contentContainer: {
		position: 'absolute',
		top: 64,
		left: 0,
		right: 0,
		bottom: 0,
		overflowX: 'hidden',
		overflowY: 'scroll'
	}
}

export default class App extends React.Component {
	render() {
		{/*console.log(this.props)*/}
		return (
			<div style={styles.rootContainer} id="rootContainer">
				<Nav />
				<div style={styles.contentContainer} id="contentContainer">
					{this.props.children/* || <HomeList articles={ARTICALS} />*/}
				</div>
			</div>
		);
	}
}
