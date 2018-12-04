/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import {
	Platform,
	StyleSheet,
	TextInput,
	Text,
	View,
	Button
} from 'react-native'
import users from './sample-users'
import questions from './questions'
import animals from './animals'
import Login from './components/Login'
import Question from './components/Question'
import Result from './components/Result'

type Props = {}
export default class App extends Component<Props> {
	state = {
		users: Object.values(users).map(el => {
			return {
				label: el.name
			}
		}),
		activeUser: {},
		loggedIn: false,
		currentQuestion: 0,
		complete: false,
		text: ''
	}

	onSelect = () => {
		let selectedButton = this.state.users.find(e => e.selected == true)
		selectedButton = selectedButton ? selectedButton.value : null

		this.setState({
			activeUser: {
				name: selectedButton
			}
		})
	}

	onPress = () => {
		this.setState({ loggedIn: true })
	}

	onTextChange = updatedUser => {
		const user = { ...this.state.activeUser }

		if (this.state.currentQuestion == 0) {
			user.food = updatedUser
		} else if (this.state.currentQuestion == 1) {
			user.color = updatedUser
		} else {
			user.desc = updatedUser
		}

		this.setState({ activeUser: user, text: updatedUser })

		console.log(user)
	}

	onSubmit = () => {
		const currentQuestionIndex = this.state.currentQuestion
		if (currentQuestionIndex === questions.length - 1) {
			this.setState({ complete: true })
		}
		this.setState({
			currentQuestion:
				currentQuestionIndex <= questions.length ? currentQuestionIndex + 1 : 0,
			text: ''
		})
	}

	returnHome = () => {
		this.setState({ loggedIn: false, complete: false, currentQuestion: 0 })
	}

	selectRandom = array => {
		return array[Math.floor(Math.random() * array.length)]
	}

	render() {
		if (this.state.complete) {
			const { food, color, desc } = this.state.activeUser
			const animal = this.selectRandom(animals)
			return (
				<View style={styles.container}>
					<Result
						food={food}
						color={color}
						desc={desc}
						animal={animal}
						onPress={this.returnHome}
					/>
				</View>
			)
		} else if (this.state.loggedIn) {
			let question = questions[this.state.currentQuestion]
			return (
				<View style={styles.container}>
					<Question
						user={this.state.activeUser.name}
						users={this.state.users}
						question={question}
						text={this.state.text}
						onTextChange={this.onTextChange}
						onSubmit={this.onSubmit}
					/>
				</View>
			)
		} else {
			return (
				<View style={styles.container}>
					<Login
						title="Who are you?"
						users={this.state.users}
						activeUser={this.state.activeUser}
						select={this.onSelect}
						onPress={this.onPress}
					/>
				</View>
			)
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	}
})
