import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {navigationRef, isMountedRef} from './rootNavigation';

const Stack = createStackNavigator();

import Login from '../container/loginContainer';
import Signup from '../container/SignupContainer';
import StartPage from '../container/StartPageContainer';

function AppStack(props) {
  return (
    <Stack.Navigator
      name="StartPage"
      initialRouteName={props.initialRouteName}
      headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="StartPage" component={StartPage} />
    </Stack.Navigator>
  );
}

export function App({isLoggedIn, guestLogin, apiDown, isNotUpdated, role}) {
  React.useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack initialRouteName="StartPage" />
    </NavigationContainer>
  );
}

function mapStateToProps(state) {
  return {};
}

export default App;
