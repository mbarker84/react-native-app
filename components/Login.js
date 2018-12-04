import React, { Component } from 'react'
import { Text, View } from 'react-native'

import RadioGroup from 'react-native-radio-buttons-group'

class Login extends Component {
	render() {
		return (
			<View>
				<Text>{this.props.title}</Text>
				<RadioGroup
					radioButtons={this.props.data}
					onPress={this.props.onPress}
				/>
			</View>
		)
	}
}

export default Login
