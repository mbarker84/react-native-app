import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'

import FancyButton from './FancyButton'
import Greeting from './Greeting'

class Question extends Component {
	state = {
		answer: ''
	}

	onSubmit = () => {
		this.props.onSubmit(this.state.answer)
	}

	render() {
		const { user, question } = this.props
		return (
			<View>
				<Greeting name={user.name} />
				<Text>{question.question}</Text>
				<TextInput
					style={{ padding: 20 }}
					placeholder="Enter your answer here"
					value={this.state.answer}
					onChangeText={answer => this.setState({ answer })}
				/>
				<FancyButton title="Next" onPress={this.onSubmit} />
			</View>
		)
	}
}

// const mapStateToProps = state => {
// 	const { user } = state
// 	return { user }
// }

export default Question
