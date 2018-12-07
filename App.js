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

import Quiz from './containers/Quiz'

//Theme
import getTheme from './native-base-theme/components'
import material from './native-base-theme/variables/material'
import { addAnswer } from './actions/actions';

// Log the initial state
console.log('Initial state')
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
store.subscribe(() => console.log(store.getState()))

export default class App extends Component {
	render = () => {
		return (
			<Provider store={store}>
				<KeyboardAwareScrollView contentContainerStyle={styles.container}>
					<Quiz></Quiz>
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
