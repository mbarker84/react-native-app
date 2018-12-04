import React, { Component } from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	button: {
		backgroundColor: 'blue',
		padding: 20,
		textAlign: 'center'
	},
	buttonText: {
		color: 'white',
		textAlign: 'center'
	}
})

class FancyButton extends Component {
	render() {
		return (
			<TouchableHighlight onPress={this.props.onPress} underlayColor="white">
				<View style={styles.button}>
					<Text style={styles.buttonText}>{this.props.title}</Text>
				</View>
			</TouchableHighlight>
		)
	}
}

export default FancyButton
