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
  View12: {flex: 1},
  item: {
    paddingHorizontal: 5,
    marginHorizontal: 10,
    backgroundColor: Color.PrimaryClr,
    borderBottomWidth: 2,
    borderBottomColor: '#181835',
  },
  title: {
    fontSize: 16,
    color: '#fff',
  },
  title1: {
    fontSize: 12,
    color: '#fff',
    paddingTop: 10,
  },
  View13: {paddingLeft: 30, width: '55%'},
  View14: {color: '#fff', fontSize: 16},
  View15: {flexDirection: 'row', paddingTop: 10, paddingBottom: 30},
  View16: {width: '45%', flexDirection: 'row'},
  View17: {paddingHorizontal: 5},
  View18: {color: '#fff', paddingTop: 2},
  item2: {
    paddingVertical: 10,
    flexDirection: 'row',
    width: '100%',
  },
  item3: {width: '10%', justifyContent: 'center'},
  item4: {width: '20%'},
  item6: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  item5: {width: '50%', paddingRight: 10, paddingLeft: 20},
  item7: {flexDirection: 'row'},
  item8: {paddingTop: 10, paddingRight: 5},
  item9: {width: '20%', justifyContent: 'center'},
  item10: {
    color: '#CD28CD',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
