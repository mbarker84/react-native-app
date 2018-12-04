import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { H2 } from 'native-base'

import FancyButton from './FancyButton'

class Result extends Component {
	render() {
		const { food, color, desc, animal } = this.props
		return (
			<View>
				<Text>Your spirit animal is the</Text>
				<H2 style={{ marginBottom: 10 }}>
					{desc}, {food}-eating {color} {animal}
				</H2>
				<FancyButton title="Start again" onPress={this.props.onPress} />
			</View>
		)
	}
}

export default Result
