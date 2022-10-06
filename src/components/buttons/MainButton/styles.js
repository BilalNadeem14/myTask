import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../units';
import {appTheme} from '../../../utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: appTheme.darkPurple,
    borderRadius: vh * 1.4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: vh * 1.6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: vh * 2,
    width: vh * 2,
    marginHorizontal: vw * 2,
  },
});

export default styles;
