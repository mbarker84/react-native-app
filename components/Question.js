import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'

import FancyButton from './FancyButton'
import Greeting from './Greeting'

class Login extends Component {
	render() {
		const userIndex = this.props.users.findIndex(el => {
			return el.label === this.props.user
		})
		return (
			<View>
				<Greeting name={this.props.user} />
				<Text>{this.props.question.question}</Text>
				<TextInput
					style={{ padding: 20 }}
					placeholder="Enter your answer here"
					onChangeText={text => this.props.onTextChange(text)}
					value={this.props.text}
				/>
				<FancyButton title="Next" onPress={this.props.onSubmit} />
			</View>
		)
	}
}

export default Login
