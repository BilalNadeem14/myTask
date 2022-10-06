import { StyleSheet } from 'react-native';
import {vw, vh} from '../../../units';
import { Fonts } from '../../../assets/fonts';
import theme from '../../../utils/theme';
export default style = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.primaryColor,
    height: vh * 7,
    borderRadius: vw * 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 4.65,
    // borderColor: '#CE1127',
    // borderWidth: vw * 0.3,
    elevation: 2,
  },
  label: { fontSize: vh * 2.2, color: 'white', 
  // fontFamily: Fonts.GB 
},
});
