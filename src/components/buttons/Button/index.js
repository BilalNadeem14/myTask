import React from 'react';
import { Text, View } from 'react-native';
import TextMedium from '../../TextWrappers/CircularStdMedium';
import styles from './styles';
import TouchableHOC from '../../../components/TouchableHOC';

export default Button = (props) => {
  return (
    <TouchableHOC
      style={[styles.container, props.style]}
      onPress={props.onPress}>
      <TextMedium style={[styles.label, props.labelStyle]}>
        {props.title}
      </TextMedium>
    </TouchableHOC>
  );
};
