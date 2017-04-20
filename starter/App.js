import React, { Component } from 'react';

import { ExpanseDown } from '../main';

import {
	puffmeout,
	puffmein,
	vanishout,
	vanishin
} from '../src/animations/Bingo/styledBingo';

export default class App extends Component {
	render () {
		const styles = {
			animation: `${puffmein} 3s`
		}

		return (
			<div style={styles}>
				<h1>Hello World</h1>
			</div>
		);
	}
}
