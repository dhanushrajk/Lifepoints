import {StyleSheet, Dimensions} from 'react-native';
import Color from './color';
const windowHeight = Dimensions.get('window').height;
const styles: any = StyleSheet.create({
  txtStyle1: {
    // backgroundColor: '#fff',
    // borderRadius: 25,
    borderColor: Color.borderClr,
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  inputStyle1: {
    height: 45,
    fontSize: 14,
    // paddingLeft: 20,
    color: '#ffff',
    width: '100%',
  },
  done: {
    position: 'absolute',
    right: 0,
    top: 30,
  },
});

export default styles;
