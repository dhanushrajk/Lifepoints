import {StyleSheet, Dimensions} from 'react-native';
import Color from '../common/color';
const windowHeight = Dimensions.get('window').height;
const styles: any = StyleSheet.create({
  maincontainer: {
    backgroundColor: Color.PrimaryClr,
    flex: 1,
  },
  mainView: {
    flex: 1,
  },
  Img: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  Img2: {
    width: 200,
    height: 200,
    // borderRadius: 50,
  },
  View1: {height: 90, width: '100%', flexDirection: 'row'},
  View2: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  View3: {
    width: '40%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  View4: {color: '#fff'},
  View5: {
    width: '35%',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  View6: {
    justifyContent: 'center',
  },
  View7: {color: '#fff', fontSize: 12},
  View8: {color: '#fff', textAlign: 'center', fontSize: 16},
  View9: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  View10: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
    borderLeftWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderTopColor: '#61E4FF',
    borderBottomColor: '#181835',
    borderLeftColor: '#181835',
    borderRightColor: '#181835',
  },
  View11: {
    color: '#61E4FF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  View12: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  View13: {color: '#fff', fontSize: 18, fontWeight: 'bold'},
  View14: {borderWidth: 5, borderColor: '#c4c4c4', borderRadius: 5},
});

export default styles;
