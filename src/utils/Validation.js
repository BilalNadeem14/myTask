import {emailReg} from './Regex';

export const validateEmail = email => {
  return emailReg.test(email);
};
