import {StyleSheet} from 'react-native';
import {vh, vw} from '../../units';
import {appTheme} from '../../utils';

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: appTheme.lightPurple,
    borderRadius: vh * 2,
    paddingHorizontal: vw * 4,
    marginVertical: vh * 1,
    elevation: 10,
    shadowColor: appTheme.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});

export default styles;
