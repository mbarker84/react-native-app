import { connect } from 'react-redux'
import LoginComponent from '../components/Login'
import { addAnswer } from '../actions/actions'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: value => {
      dispatch(addAnswer(value))
    }
  }
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent)

export default Login

