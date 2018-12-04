import React, { Component } from 'react'
import { Text } from 'react-native'
import { H2 } from 'native-base'

class Greeting extends Component {
	render() {
		return <H2 style={{ marginBottom: 10 }}>Hello {this.props.name}!</H2>
	}
}

export default Greeting
