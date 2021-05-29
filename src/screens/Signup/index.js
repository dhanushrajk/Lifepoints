import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import {Button, Container} from 'native-base';
import t from 'tcomb-form-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

import Color from '../common/color';
import loginTemplate from '../common/LoginTemplate';
const logo = require('../../../assets/image.png');
import styles from './style';

const Form = t.form.Form;

var checkpassword = null;

const nameField = t.refinement(t.String, value => {
  return value.length > 1;
});
const Email = t.subtype(t.maybe(t.String), email => {
  const reg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!email) {
    return true;
  } else {
    return reg.test(email);
  }
});
const pswdField = t.refinement(t.String, value => {
  checkpassword = value;
  return value.length >= 6;
});

const cnfrmPswdField = t.refinement(t.String, value => {
  return value === checkpassword;
});
var Person = t.struct({
  name: nameField,
  email: Email,
  password: pswdField,
  confmpsrwd: cnfrmPswdField,
});

var val = '';
function Signup(props) {
  const [value, setValue] = useState('');
  const [gender, setgender] = useState(null);

  function onChange(Person1, path) {
    setValue(Person1);
    val.getComponent(path).validate();
  }

  const options = {
    fields: {
      name: {
        template: loginTemplate,
        placeholder: 'USERNAME',
        returnKeyType: 'next',
        error: 'This feild is required',
        focus: true,
        blurOnSubmit: false,
        config: {
          label: 'USERNAME',
        },
      },
      email: {
        template: loginTemplate,
        placeholder: 'EMAIL',
        returnKeyType: 'next',
        error: 'Invalid Email',
        focus: true,
        blurOnSubmit: false,
        config: {
          label: 'EMAIL',
        },
      },
      password: {
        template: loginTemplate,
        placeholder: 'PASSWORD',
        secureTextEntry: true,
        error: 'This feild is required',
        returnKeyType: 'done',
        focus: true,
        config: {
          label: 'PASSWORD',
        },

        blurOnSubmit: false,
      },
      confmpsrwd: {
        template: loginTemplate,
        placeholder: 'CONFIRM PASSWORD ',
        error: 'Password not match',
        secureTextEntry: true,
        returnKeyType: 'done',
        focus: true,
        config: {
          label: 'CONFIRM PASSWORD',
        },
      },
    },
  };

  return (
    <Container style={styles.maincontainer}>
      <StatusBar backgroundColor={Color.PrimaryClr} barStyle="light-content" />
      <ScrollView keyboardShouldPersistTaps="always">
        <KeyboardAwareScrollView
          enableAutoAutomaticScroll={true}
          enableResetScrollToCoords={true}
          automaticallyAdjustContentInsets={true}
          keyboardShouldPersistTaps="always"
          resetScrollToCoords={{x: 0, y: 0}}
          scrollEnabled={true}
          enableOnAndroid={true}>
          <View style={styles.mainView}>
            <View style={styles.view12}>
              <Text style={styles.Text1}> PROFILE PICTURE</Text>
              <View style={styles.imageView}>
                <View style={styles.view1}>
                  <Text style={styles.flatView6}>
                    <Icon name="camera" size={30} color={Color.borderClr} />
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.gndView}>
              <Text style={styles.Text2}>GENDER</Text>
            </View>
            <View style={styles.gndView1}>
              {gender !== null ? (
                <View style={styles.done}>
                  <MaterialIcon name={'done'} size={20} color={'#fff'} />
                </View>
              ) : null}
              <View style={styles.gndView2}>
                <TouchableOpacity
                  style={[
                    styles.gndView3,
                    gender == 'male'
                      ? {backgroundColor: '#5098F2'}
                      : {backgroundColor: '#171732'},
                  ]}
                  onPress={() => setgender('male')}>
                  <Text style={styles.flatView6}>
                    <Icon name="user" size={30} color={Color.TextClr} />
                  </Text>
                </TouchableOpacity>
                <Text style={styles.gntxt}>Male</Text>
              </View>
              <View style={styles.gndView2}>
                <TouchableOpacity
                  style={[
                    styles.gndView3,
                    gender == 'female'
                      ? {backgroundColor: '#5098F2'}
                      : {backgroundColor: '#171732'},
                  ]}
                  onPress={() => setgender('female')}>
                  <Text style={styles.flatView6}>
                    <Icon name="user" size={30} color={Color.TextClr} />
                  </Text>
                </TouchableOpacity>
                <Text style={styles.gntxt}>Female</Text>
              </View>
              <View style={styles.gndView2}>
                <TouchableOpacity
                  style={[
                    styles.gndView3,
                    gender == 'others'
                      ? {backgroundColor: '#5098F2'}
                      : {backgroundColor: '#171732'},
                  ]}
                  onPress={() => setgender('others')}>
                  <Text style={styles.flatView6}>
                    <Icon name="user" size={30} color={Color.TextClr} />
                  </Text>
                </TouchableOpacity>
                <Text style={styles.gntxt}>Other</Text>
              </View>
            </View>
            <View style={styles.View3}>
              <Form
                ref={c => {
                  val = c;
                }}
                type={Person}
                options={options}
                value={value}
                onChange={(v, path) => onChange(v, path)}
              />
            </View>
            <View style={{paddingTop: 10, width: '85%'}}>
              <LinearGradient
                start={{x: 0.0, y: 1.0}}
                end={{x: 1.0, y: 0.0}}
                locations={[0, 0.5, 0.6]}
                colors={['#5098F2', '#0F68D7']}
                style={styles.linearGradient}>
                <TouchableOpacity
                  style={styles.View4}
                  onPress={() => props.navigation.navigate('MyTabs')}>
                  <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <View style={styles.loginView10}>
              <Text style={styles.loginView11}>Don't have an account? </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Login')}>
                <Text style={styles.loginView12}>Log in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </Container>
  );
}

export default Signup;
