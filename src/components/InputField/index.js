import React from 'react';
import {View, TextInput, Platform} from 'react-native';
import {vh} from '../../units';
import {appTheme} from '../../utils';

import styles from './styles';

const InputField = props => {
  return (
    <View
      style={[
        styles.inputContainer,
        Platform.OS == 'ios' && {paddingVertical: vh * 2},
        props.style,
      ]}>
      <TextInput
        placeholderTextColor={appTheme.darkPurple}
        {...props}
        style={[{color: appTheme.black}, props.inputStyle]}
      />
    </View>
  );
};

export default InputField;
