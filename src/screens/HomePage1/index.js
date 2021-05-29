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
const image1 = require('../../../assets/Image1.png');
const image2 = require('../../../assets/Image2.png');
const image3 = require('../../../assets/Image3.png');

function HomePage1(props) {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Nike Joyride',
      desc: 'Lorem ipsum color sit amet, consectetur',
      data: image1,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Nike',
      desc: 'Lorem ipsum color sit amet, consectetur',
      data: image2,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Nike',
      desc: 'Lorem ipsum color sit amet, consectetur',
      data: image3,
    },
  ];
  function renderItem(item) {
    return (
      <TouchableOpacity style={styles.item}>
        <View style={styles.item2}>
          <Image source={item.data} style={styles.item3} />
        </View>
        <View style={{flex: 2, paddingVertical: 10, paddingHorizontal: 10}}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.title1}>{item.desc}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <Container style={styles.maincontainer}>
      <StatusBar backgroundColor="#2A2656" barStyle="light-content" />
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
          <View style={styles.View13}>
            <Text style={styles.View14}>NEWS</Text>
          </View>
          <FlatList
            horizontal
            data={DATA}
            renderItem={({item}) => renderItem(item, props)}
            keyExtractor={item => item.id}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </Container>
  );
}

export default HomePage1;
