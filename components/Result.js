import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { H2 } from 'native-base'
import animals from '../animals'

import FancyButton from './FancyButton'

class Result extends Component {
	selectRandom = array => {
		return array[Math.floor(Math.random() * array.length)]
	}

	render() {
		const { food, color, description } = this.props
		const animal = this.selectRandom(animals)

		return (
			<View>
				<Text>Your spirit animal is the</Text>
				<H2 style={{ marginBottom: 10 }}>
					{description}, {food}-eating {color} {animal}
				</H2>
				<FancyButton title="Start again" onPress={this.props.onSubmit} />
			</View>
		)
	}
}

export default Result
