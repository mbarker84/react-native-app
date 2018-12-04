import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Header, H1, H2 } from 'native-base'

import RadioGroup from 'react-native-radio-buttons-group'
import FancyButton from './FancyButton'

class Login extends Component {
	render() {
		return (
			<View>
				<H1 style={{ marginBottom: 15 }}>Find your spirit animal</H1>
				<H2 style={{ marginBottom: 10 }}>{this.props.title}</H2>
				<View style={{ marginBottom: 10 }}>
					<RadioGroup
						radioButtons={this.props.users}
						onPress={this.props.select}
					/>
				</View>
				<FancyButton title="Next" onPress={this.props.onPress} />
			</View>
		)
	}
}

export default Login
