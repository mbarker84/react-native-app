import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Input extends Component {
	render() {
		return (
			<View>
				<Input type="radio" id={this.props.id} name={this.props.name} />
				<label htmlFor={this.props.id}>
					<Text>{this.props.name}</Text>
				</label>
			</View>
		)
	}
}

export default Input
