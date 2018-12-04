import React, { Component } from 'react'
import { Text, View } from 'react-native'

import RadioGroup from 'react-native-radio-buttons-group'
import FancyButton from './FancyButton'

class Login extends Component {
	render() {
		return (
			<View>
				<Text>{this.props.title}</Text>
				<RadioGroup
					radioButtons={this.props.users}
					onPress={this.props.select}
				/>
				<FancyButton title="Next" onPress={this.props.onPress} />
			</View>
		)
	}
}

export default Login
