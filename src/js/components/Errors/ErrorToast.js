
import React from 'react';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DEFAULT_ERROR_MESSAGE } from '../../helpers/translations';


class ErrorToast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
    this.props.removeError();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      visible: nextProps.caughtError
    })
  }

  render() {
    const { errorMessage, caughtError, logoutBtn } = this.props;
    if (caughtError) {
      return (
        <>
          <Alert color="dark" isOpen={this.state.visible} toggle={this.onDismiss}>
            {errorMessage ? errorMessage : DEFAULT_ERROR_MESSAGE}
            {logoutBtn &&
              <a href="/logout">Click Here</a>
            }
          </Alert>
        </>
      )
    } else {
      return null;
    }
  }
}

ErrorToast.propTypes = {
  logoutBtn: PropTypes.bool,
}

ErrorToast.defaultProps = {
  logoutBtn: true
};


const mapDispatchToProps = (dispatch) => {
  return {
    removeError: () => dispatch({ type:"REMOVE_ERROR"}),
  }
}


function mapStateToProps(state) {
  const { errorMessage, error, caughtError, logoutBtn } = state.errors;

  return { errorMessage, error, caughtError, logoutBtn }
}

const Error = connect(mapStateToProps, mapDispatchToProps)(ErrorToast);

export default Error;

