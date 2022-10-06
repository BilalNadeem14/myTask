import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

const CircularStdBold = props => {
  return (
    <Text {...props} style={[styles.font, props.style]}
      allowFontScaling={false}
      adjustsFontSizeToFit={false}
    >
      {props.children}
    </Text>
  );
};

export default CircularStdBold;
