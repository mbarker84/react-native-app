import React, { Component } from 'react'
import { Text, View } from 'react-native'

import FancyButton from './FancyButton'

class Result extends Component {
	render() {
		const { food, color, desc, animal } = this.props
		return (
			<View>
				<Text>
					Your spirit animal is the {desc}, {food}-eating {color} {animal}
				</Text>
				<FancyButton title="Start again" onPress={this.props.onPress} />
			</View>
		)
	}
}

export default Result
