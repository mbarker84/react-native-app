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
import Greeting from './components/Greeting'
import Login from './components/Login'
import ScrollingContainer from './components/ScrollingContainer'

type Props = {}
export default class App extends Component<Props> {
	state = {
		data: Object.values(users).map(el => {
			return {
				label: el.name
			}
		}),
		activeUser: null,
		loggedIn: false,
		welcomeGreeting: null,
		buttonPressed: false,
		food: null
	}

	onPress = () => {
		let selectedButton = this.state.data.find(e => e.selected == true)
		selectedButton = selectedButton ? selectedButton.value : null

		this.setState({
			loggedIn: true,
			activeUser: selectedButton
		})
	}

	onButtonPress = () => {
		this.setState({
			welcomeGreeting: `You pressed the button. No ${this.state.food} for you.`,
			buttonPressed: true
		})
	}

	render() {
		let greeting
		if (!this.state.buttonPressed) {
			greeting = this.state.food
				? `I love ${this.state.food}`
				: 'You haven’t chosen your favourite food'
		} else {
			greeting = this.state.welcomeGreeting
		}

		if (this.state.loggedIn) {
			return (
				<View style={styles.container}>
					<Greeting name={this.state.activeUser} />
					<TextInput
						style={{ padding: 20 }}
						placeholder="Type your favourite food"
						onChangeText={food => this.setState({ food, buttonPressed: false })}
					/>
					<Text>{greeting}</Text>
					<View style={{ backgroundColor: 'black', marginTop: 20 }}>
						<Button onPress={this.onButtonPress} title="Press the button" />
					</View>
				</View>
			)
		} else {
			return (
				<View style={styles.container}>
					<Login
						title="My First App"
						data={this.state.data}
						activeUser={this.state.activeUser}
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
