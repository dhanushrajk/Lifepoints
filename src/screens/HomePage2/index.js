import React from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import {Container} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

import styles from './style';
import Color from '../common/color';
const man = require('../../../assets/man.png');
const image4 = require('../../../assets/Image4.png');

function HomePage2(props) {
  return (
    <Container style={styles.maincontainer}>
      <StatusBar backgroundColor={Color.PrimaryClr} barStyle="light-content" />
      <View style={styles.mainView}>
        <View style={{width: '100%', elevation: 5}}>
          <LinearGradient
            start={{x: 0.3, y: 0.1}}
            end={{x: 1.0, y: 1.0}}
            locations={[0, 0.5, 0.6]}
            colors={['#2A2656', '#534AA2F4']}
            style={styles.linearGradient}>
            <View style={styles.View1}>
              <TouchableOpacity style={styles.View2}>
                <Image source={man} style={styles.Img} />
              </TouchableOpacity>
              <View style={styles.View3}>
                <Text style={styles.View4}>DavidW</Text>
              </View>
              <View style={styles.View5}>
                <View style={styles.View6}>
                  <Text style={styles.View7}>Points</Text>
                  <Text style={styles.View8}>40</Text>
                </View>
                <View style={styles.View9}>
                  <TouchableOpacity style={styles.View10}>
                    <Text style={styles.View11}>LP</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.View12}>
          <View style={styles.View14}>
            <Image source={image4} style={styles.Img2} />
          </View>
        </View>
      </View>
    </Container>
  );
}

export default HomePage2;
