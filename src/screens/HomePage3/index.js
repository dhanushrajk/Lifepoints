import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Switch,
} from 'react-native';
import {Container} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style';
import Color from '../common/color';
const man = require('../../../assets/man.png');
const image5 = require('../../../assets/Image5.png');
const image6 = require('../../../assets/Image6.png');
const image7 = require('../../../assets/Image7.png');
const image8 = require('../../../assets/Image8.png');

function HomePage3(props) {
  const [isEnabled, setIsEnabled] = useState(true);
  const [error, setError] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    setError(true);
  };
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      no: 1,
      title: 'Henry Ramirez',
      desc: 13652,
      data: image5,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      no: 2,
      title: 'Kara Cloutier',
      desc: 17860,
      data: image8,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      no: 3,
      title: 'Carl Johnson',
      desc: 12856,
      data: image5,
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53afbb28ba',
      no: 4,
      title: 'Nathan Holt',
      desc: 12685,
      data: image8,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91faa97f63',
      no: 5,
      title: 'Nathan Holt',
      desc: 13528,
      data: image7,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571fe29d72',
      no: 6,
      title: 'Henry Ramirez',
      desc: 13475,
      data: image5,
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abab28ba',
      no: 7,
      title: 'Nathan Holt',
      desc: 12685,
      data: image8,
    },
    {
      id: '3ac68afc-c605-48d3-aa4f8-fbd91aa97f63',
      no: 8,
      title: 'Nathan Holt',
      desc: 13528,
      data: image7,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e2s9d72',
      no: 9,
      title: 'Henry Ramirez',
      desc: 13475,
      data: image5,
    },
  ];

  function renderItem(item) {
    return (
      <View style={styles.item}>
        <View style={styles.item2}>
          <View style={styles.item3}>
            <Text style={styles.title}>{item.no}</Text>
          </View>
          <View style={styles.item4}>
            <Image style={styles.item6} source={item.data} />
          </View>
          <View style={styles.item5}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.item7}>
              <Text style={styles.item8}>
                <Icon name="star" size={15} color={Color.TextClr} />
              </Text>
              <Text style={styles.title1}>{item.desc}</Text>
            </View>
          </View>
          <View style={styles.item9}>
            <Text style={styles.item10}>LP</Text>
          </View>
        </View>
      </View>
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
        <View style={styles.View12}>
          <View style={styles.View15}>
            <View style={styles.View13}>
              <Text style={styles.View14}>RANKING</Text>
            </View>
            <View style={styles.View16}>
              <Text style={styles.View18}>Monthly</Text>
              <View style={styles.View17}>
                <Switch
                  trackColor={{false: '#767577', true: '#767577'}}
                  thumbColor={'#36C7FF'}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  style={{transform: [{scaleX: 1.0}, {scaleY: 1.0}]}}
                />
              </View>
              <Text style={styles.View18}>Yearly</Text>
            </View>
          </View>
          <FlatList
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

export default HomePage3;
