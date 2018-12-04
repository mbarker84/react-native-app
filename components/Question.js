import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'

import FancyButton from './FancyButton'
import Greeting from './Greeting'

class Login extends Component {
	render() {
		const { user, question, text, onSubmit } = this.props
		return (
			<View>
				<Greeting name={user} />
				<Text>{question.question}</Text>
				<TextInput
					style={{ padding: 20 }}
					placeholder="Enter your answer here"
					onChangeText={text => this.props.onTextChange(text)}
					value={text}
				/>
				<FancyButton title="Next" onPress={onSubmit} />
			</View>
		)
	}
}

export default Login
