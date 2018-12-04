// @flow

import variable from './../variables/platform'

export default (variables /*: * */ = variable) => {
	const contentTheme = {
		backgroundColor: 'transparent',
		'NativeBase.Segment': {
			borderWidth: 0,
			backgroundColor: 'transparent'
		}
	}

	return contentTheme
}
