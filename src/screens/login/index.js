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

import styles from './style';
import Color from '../common/color';
import loginTemplate from '../common/LoginTemplate';
const logo = require('../../../assets/image.png');

const Form = t.form.Form;
const PasswordMinLength = t.refinement(t.String, value => {
  return value.length >= 6;
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
var val = '';
var Person = t.struct({
  email: Email,
  password: PasswordMinLength,
});
function Login(props) {
  const [value, setValue] = useState('');

  function onChange(Person1, path) {
    setValue(Person1);
    val.getComponent(path).validate();
  }

  const options = {
    fields: {
      email: {
        template: loginTemplate,
        placeholder: 'Email',
        keyboardType: 'email-address',
        returnKeyType: 'next',
        error: 'This feild is required',
        focus: true,
        blurOnSubmit: false,
        config: {
          // labelHide: true,
          label: 'EMAIL',
        },
      },
      password: {
        template: loginTemplate,
        placeholder: 'Password ',
        secureTextEntry: true,
        error: 'This feild is required',
        returnKeyType: 'done',
        focus: true,
        config: {
          // labelHide: true,
          label: 'PASSWORD',
        },

        blurOnSubmit: false,
        onSubmitEditing: () => onPress(),
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
            <View style={styles.imageView}>
              <View style={styles.view1}>
                <View style={styles.view2} />
                <Image source={logo} style={styles.Img} />
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
            <View style={styles.View7}>
              <TouchableOpacity style={styles.View5}>
                <Text style={styles.View6}>Forgot password?</Text>
              </TouchableOpacity>
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
                  <Text style={styles.buttonText}>LOG IN</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <View style={styles.loginView10}>
              <Text style={styles.loginView11}>Don't have an account? </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Signup')}>
                <Text style={styles.loginView12}>Create one</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </Container>
  );
}

export default Login;
