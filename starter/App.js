import React, { Component } from 'react';

import {
	FadeIn,
	Rotate
} from '../main';

export default class App extends Component {
	render () {
		return (
			<FadeIn duration="3s">
				<h1>Hello World</h1>
			</FadeIn>
		);
	}
}
