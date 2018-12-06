import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Header, H1, H2 } from 'native-base'

import RadioGroup from 'react-native-radio-buttons-group'
import FancyButton from './FancyButton'
import users from '../sample-users'

class Login extends Component {
	initialRadioButtonOptions = () => {
		return Object.values(users).map((el, index) => {
			return { label: el.name, name: el.name, selected: index === 0 }
		})
	}

	state = {
		radioButtonOptions: this.initialRadioButtonOptions(),
		answer: this.initialRadioButtonOptions()[0]
	}

	onSubmit = () => {
		this.props.onSubmit(this.state.answer)
	}

	onSelect = radioButtonOptions => {
		this.setState({
			radioButtonOptions,
			answer: radioButtonOptions.find(e => e.selected) || radioButtonOptions[0]
		})
	}

	render() {
		return (
			<View>
				<H1 style={{ marginBottom: 15 }}>Find your spirit animal</H1>
				<H2 style={{ marginBottom: 10 }}>Who are you?</H2>
				<View style={{ marginBottom: 10 }}>
					<RadioGroup
						radioButtons={this.state.radioButtonOptions}
						onPress={this.onSelect}
					/>
				</View>
				<FancyButton
					title="Next"
					onPress={this.onSubmit}
					disabled={this.state.answer}
				/>
			</View>
		)
	}
}

export default Login
