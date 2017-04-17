import React, { Component } from 'react';

import { ExpanseDown } from '../main';

export default class App extends Component {
	render () {
		return (
			<ExpanseDown duration="2s">
				<h1>Hello World</h1>
			</ExpanseDown>
		);
	}
}