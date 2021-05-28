import {StyleSheet, Dimensions} from 'react-native';
import Color from '../common/color';
const windowHeight = Dimensions.get('window').height;
const styles: any = StyleSheet.create({
  maincontainer: {
    backgroundColor: Color.PrimaryClr,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  Img: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  view1: {
    borderWidth: 2,
    padding: 40,
    borderColor: Color.borderClr,
    borderRadius: 200,
  },
  view2: {
    width: 15,
    height: 15,
    backgroundColor: Color.boxClr,
    position: 'absolute',
    right: 20,
    top: 32,
  },
});

export default styles;
