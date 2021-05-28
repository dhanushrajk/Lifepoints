// @flow
import * as React from 'react';

import Login from '../../screens/login';

function LoginContainer(props) {
  return <Login navigation={props.navigation} />;
}

function bindAction(dispatch) {
  return {};
}

function mapStateToProps(state) {
  return {};
}

export default LoginContainer;
