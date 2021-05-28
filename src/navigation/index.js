import React from 'react';
import NavigationStack from './navStack';

export interface Props {
  navigation: any;
}
export interface State {}

export default class AppNavigation extends React.Component<Props, State> {
  componentDidMount() {}
  render() {
    return <NavigationStack />;
  }
}
