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
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  view1: {
    width: 100,
    height: 100,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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

  loginView10: {
    flexDirection: 'row',
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  loginView11: {color: Color.TextClr},
  loginView12: {
    // fontSize: 16,
    paddingLeft: 10,
    color: Color.TextClr,
  },
  Text1: {
    color: Color.TextClr,
  },
  Text2: {
    color: Color.TextClr,
    textAlign: 'left',
  },
  view12: {
    paddingTop: 30,
    alignItems: 'center',
  },
  gndView: {
    alignSelf: 'flex-start',
    paddingLeft: 40,
    paddingBottom: 10,
  },
  gndView1: {
    flexDirection: 'row',
    width: '80%',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  gndView2: {
    width: '33.33%',
    alignItems: 'center',
  },
  gndView3: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gntxt: {
    color: Color.TextClr,
    paddingTop: 5,
  },
  done: {
    position: 'absolute',
    right: 0,
    top: 30,
  },
});

export default styles;
