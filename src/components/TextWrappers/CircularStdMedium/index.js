import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

const CircularStdMedium = props => {
  return (
    <Text {...props} style={[styles.font, props.style]}
      allowFontScaling={false}
      adjustsFontSizeToFit={false}
    >
      {props.children}
    </Text>
  );
};

export default CircularStdMedium;
