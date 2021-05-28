import React from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import {Container} from 'native-base';

import styles from './style';
import Color from '../common/color';
const logo = require('../../../assets/image.png');

function StartPage(props) {
  return (
    <Container style={styles.maincontainer}>
      <StatusBar backgroundColor={Color.PrimaryClr} barStyle="light-content" />
      <View style={styles.mainView}>
        <TouchableOpacity
          style={styles.view1}
          onPress={() => {
            props.navigation.navigate('Login');
          }}>
          <View style={styles.view2} />
          <Image source={logo} style={styles.Img} />
        </TouchableOpacity>
      </View>
    </Container>
  );
}

export default StartPage;
