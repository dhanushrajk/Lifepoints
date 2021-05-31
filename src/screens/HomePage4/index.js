import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';
import {Container} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

import styles from './style';
import Color from '../common/color';
const man = require('../../../assets/man.png');
const image10 = require('../../../assets/Image10.png');
const image11 = require('../../../assets/Image11.png');
const image12 = require('../../../assets/Image12.png');
const image13 = require('../../../assets/Image13.png');

function HomePage4(props) {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Spoty',
      desc: 'Lorem ipsum color sit amet, consectetur',
      data: image10,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'apple',
      desc: 'Lorem ipsum color sit amet, consectetur',
      data: image11,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'shoe',
      desc: 'Lorem ipsum color sit amet, consectetur',
      data: image12,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7z2',
      title: 'icecream',
      desc: 'Lorem ipsum color sit amet, consectetur',
      data: image13,
    },
  ];
  function renderItem(item) {
    return (
      <TouchableOpacity style={styles.item}>
        <View
          style={[
            styles.item2,
            item.title == 'apple'
              ? {backgroundColor: '#1C1C1C'}
              : item.title == 'shoe'
              ? {backgroundColor: '#0F68D7'}
              : item.title == 'Spoty'
              ? {backgroundColor: '#C8A2F1'}
              : {backgroundColor: '#00643C'},
          ]}>
          <Image source={item.data} style={styles.item3} />
        </View>
      </TouchableOpacity>
    );
  }
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
        <View style={styles.View14}>
          <Text style={styles.View13}>SHOP</Text>
        </View>
        <View style={styles.View12}>
          <FlatList
            data={DATA}
            numColumns={2}
            renderItem={({item}) => renderItem(item, props)}
            keyExtractor={item => item.id}
            keyExtractor={item => item.id}
            columnWrapperStyle={{flexWrap: 'wrap', flex: 1, marginTop: 5}}
          />
        </View>
      </View>
    </Container>
  );
}

export default HomePage4;
