import * as React from 'react';
import {View, TextInput, Text, Image} from 'react-native';
import styles from './styles';
import Color from './color';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

function loginTemplate(locals: Object) {
  console.log('lo================', locals);
  return (
    <View style={{paddingTop: 20, paddingLeft: 10, paddingRight: 10}}>
      <View style={[styles.txtStyle1]}>
        <Text
          style={{
            color: '#fff',
            fontSize: 10,
            paddingLeft: 5,
            paddingBottom: 5,
          }}>
          {locals.config.label}
        </Text>
        <TextInput
          onChangeText={value => locals.onChange(value)}
          ref="input"
          minLength={locals.minLength}
          autoCapitalize={locals.autoCapitalize}
          keyboardAppearance={locals.keyboardAppearance}
          onFocus={locals.onFocus}
          focus={locals.focus}
          keyboardType={locals.keyboardType}
          blurOnSubmit={locals.blurOnSubmit}
          secureTextEntry={locals.secureTextEntry}
          onSubmitEditing={locals.onSubmitEditing}
          returnKeyType={locals.returnKeyType}
          value={locals.value}
          style={styles.inputStyle1}
          underlineColorAndroid={'transparent'}
          placeholder={locals.placeholder}
          placeholderTextColor={Color.TextClr}
        />
        {locals.hasError !== true && locals.value ? (
          <View style={styles.done}>
            <MaterialIcon name={'done'} size={20} color={'#fff'} />
          </View>
        ) : null}
        {locals.hasError == true &&
        locals.config.label == 'CONFIRM PASSWORD' ? (
          <View style={styles.done}>
            <MaterialIcon name={'close'} size={20} color={'#fff'} />
          </View>
        ) : null}
      </View>
    </View>
  );
}

module.exports = loginTemplate;
