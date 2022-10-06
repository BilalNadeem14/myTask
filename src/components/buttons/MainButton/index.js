import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {generalImages} from '../../../assets/images';

import CircularStdBook from '../../../components/TextWrappers/CircularStdBook';
import CircularStdMedium from '../../TextWrappers/CircularStdMedium';
import {appTheme} from '../../../utils';
import styles from './styles';

const MainButton = props => {
  return (
    <TouchableOpacity
      // activeOpacity={0.8}
      {...props}
      style={[styles.container, props.style]}>
      {props.icon && <Image source={props.icon} style={styles.icon} />}

      <CircularStdMedium style={[{color: appTheme.white}, props.titleStyle]}>
        {props.title}
      </CircularStdMedium>
    </TouchableOpacity>
  );
};

export default MainButton;
