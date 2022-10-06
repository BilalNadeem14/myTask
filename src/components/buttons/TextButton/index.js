import React from 'react';
import {TouchableOpacity} from 'react-native';

import CircularStdBook from '../../TextWrappers/CircularStdBook';
import styles from './styles';

const TextButton = props => {
  return (
    <TouchableOpacity {...props} style={props.style}>
      <CircularStdBook style={[props.textStyle, styles.text]}>
        {props.title}
      </CircularStdBook>
    </TouchableOpacity>
  );
};

export default TextButton;
