import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {navigationRef, isMountedRef} from './rootNavigation';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import Login from '../container/loginContainer';
import Signup from '../container/SignupContainer';
import StartPage from '../container/StartPageContainer';
import HomePage1 from '../container/HomePage1Container';
import HomePage2 from '../container/HomePage2Container';
import HomePage3 from '../container/HomePage3Container';
import HomePage4 from '../container/HomePage4Container';

function Tabbar({state, descriptors, navigation}) {
  return (
    <View style={{flexDirection: 'row', height: 55, elevation: 1}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 5,
              borderTopWidth: 2,
              borderTopColor: '#00001F',
              elevation: 10,
              backgroundColor: isFocused ? '#00001F' : '#00001F',
            }}>
            <View
              style={{
                paddingbottom: 10,
              }}>
              {label === 'HomePage1' ? (
                <Text>
                  <Icon
                    name="th-large"
                    size={20}
                    color={!isFocused ? '#fff' : '#D93069'}
                  />
                </Text>
              ) : label === 'HomePage2' ? (
                <Text>
                  <Icon
                    name="credit-card"
                    size={20}
                    color={!isFocused ? '#fff' : '#D93069'}
                  />
                </Text>
              ) : label === 'HomePage3' ? (
                <Text>
                  <Icon
                    name="trophy"
                    size={20}
                    color={!isFocused ? '#fff' : '#D93069'}
                  />
                </Text>
              ) : (
                <Text>
                  <Icon
                    name="shopping-cart"
                    size={20}
                    color={!isFocused ? '#fff' : '#D93069'}
                  />
                </Text>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomePage1"
      tabBar={props => <Tabbar {...props} />}>
      <Tab.Screen name="HomePage1" component={HomePage1} />
      <Tab.Screen name="HomePage2" component={HomePage2} />
      <Tab.Screen name="HomePage3" component={HomePage3} />
      <Tab.Screen name="HomePage4" component={HomePage4} />
    </Tab.Navigator>
  );
}

function AppStack(props) {
  return (
    <Stack.Navigator
      name="StartPage"
      initialRouteName={props.initialRouteName}
      headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="StartPage" component={StartPage} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
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
