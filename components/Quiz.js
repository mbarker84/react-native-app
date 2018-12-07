import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import questions from '../questions'
import Login from '../containers/Login'
import Question from '../containers/Question'
import Result from '../containers/Result'

export default class Quiz extends Component {
	currentQuestion = () => {
		return questions[this.currentQuestionId()]
	}

	currentQuestionId = () => {
		return this.props.answers.length - 1
	}

	getUser = () => {
		return this.props.answers[0]
	}

	renderQuestion = () => {
		return (
			<View style={styles.container}>
				<Question
					user={this.getUser()}
					question={this.currentQuestion()}
					key={this.currentQuestionId()}
				/>
			</View>
		)
	}

	isComplete = () => {
		return this.props.answers.length === questions.length + 1
	}

	isAtStart = () => {
		return this.props.answers.length === 0
	}

	getResults = () => {
		return {
			food: this.props.answers[1],
			color: this.props.answers[2],
			description: this.props.answers[3]
		}
	}

	renderBody = () => {
		if (this.isComplete()) {
			return <Result {...this.getResults()} />
		} else if (this.isAtStart()) {
			return <Login />
		} else {
			return this.renderQuestion()
		}
	}

	render = () => {
		return (
      <View>{this.renderBody()}</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFF',
		padding: 20
	}
})
