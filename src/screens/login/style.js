import {StyleSheet, Dimensions} from 'react-native';
import Color from '../common/color';
const windowHeight = Dimensions.get('window').height;
const styles: any = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: Color.PrimaryClr,
  },
  mainView: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: Color.PrimaryClr,
  },
  Img: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  view1: {
    borderWidth: 2,
    padding: 40,
    borderColor: Color.borderClr,
    borderRadius: 200,
  },
  view2: {
    width: 10,
    height: 10,
    backgroundColor: Color.boxClr,
    position: 'absolute',
    right: 11,
    top: 32,
  },
  imageView: {
    paddingVertical: 20,
  },
  linearGradient: {
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
  View3: {width: '90%', paddingVertical: 20},
  View4: {
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  View5: {},
  View6: {
    color: '#fff',
  },
  View7: {
    width: '100%',
    alignItems: 'flex-start',
    paddingBottom: 20,
    paddingLeft: 30,
  },
  loginView10: {
    flexDirection: 'row',
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginView11: {color: Color.TextClr},
  loginView12: {
    // fontSize: 16,
    paddingLeft: 10,
    color: Color.TextClr,
  },
});

export default styles;
