/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// Import react router deps
// import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import answerReducer from './reducers/answers'

const store = createStore(answerReducer)

//Theme
import getTheme from './native-base-theme/components'
import material from './native-base-theme/variables/material'

import questions from './questions'
import Login from './components/Login'
import Question from './components/Question'
import Result from './components/Result'

export default class App extends Component {
	state = {
		answers: []
	}

	onSubmit = answer => {
		this.setState({
			answers: [...this.state.answers, answer]
		})
	}

	currentQuestion = () => {
		return questions[this.currentQuestionId()]
	}

	currentQuestionId = () => {
		return this.state.answers.length - 1
	}

	returnHome = () => {
		this.setState({ answers: [] })
	}

	getUser = () => {
		return this.state.answers[0]
	}

	renderQuestion = () => {
		return (
			<View style={styles.container}>
				<Question
					user={this.getUser()}
					question={this.currentQuestion()}
					onSubmit={this.onSubmit}
					key={this.currentQuestionId()}
				/>
			</View>
		)
	}

	isComplete = () => {
		return this.state.answers.length === questions.length + 1
	}

	isAtStart = () => {
		return this.state.answers.length === 0
	}

	getResults = () => {
		return {
			food: this.state.answers[1],
			color: this.state.answers[2],
			description: this.state.answers[3]
		}
	}

	renderBody = () => {
		if (this.isComplete()) {
			return <Result {...this.getResults()} onSubmit={this.returnHome} />
		} else if (this.isAtStart()) {
			return <Login users={this.state.users} onSubmit={this.onSubmit} />
		} else {
			return this.renderQuestion()
		}
	}

	render = () => {
		return (
			<Provider store={store}>
				<KeyboardAwareScrollView contentContainerStyle={styles.container}>
					<View>{this.renderBody()}</View>
				</KeyboardAwareScrollView>
			</Provider>
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
