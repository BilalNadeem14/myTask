import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast';

export const toast = (msg) => {
  if (typeof msg === 'string') {
    setTimeout(() => alert(msg), 500) 
  } else {
    setTimeout(() => alert('An error occured while processing'), 1000) 
  }
};

export const appTheme = {
  darkPurple: '#48105B',
  lightPurple: '#ECEBFF',
  extraLightPurple: '#FBEEFF',
  purpleShade: '#FCF5FF',
  white: '#fff',
  black: '#000',
  lightGray: '#F6F6F6',
  grayShade: '#EBEAEF',
  borderColor: '#8950A3',
  gray: '#666666',
  grayText: '#999999',
  purpleShade: '#C9C8E7',
  placeholderColor: '#C1C1C1',
  green: '#1EC957',
  stepperText: '#AAAAAA',
};

export const regex = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  alphabets: /^[a-zA-Z ]*$/,
  phone: /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm,
  numbers: /^[0-9]+$/
}

const persistConfig = {
  key: 'Task-storage-root',
  storage: AsyncStorage,
  // whitelist: ['authReducer']
};

export const msg = {}

const Utils = {
  regex: regex,
  // showToast: toast,
  persistConfig: persistConfig,
  msg: msg,
  // events: events,
  // baseUrl: baseUrl,
};
export default Utils;