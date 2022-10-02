import {StyleSheet} from 'react-native';
import {vh} from '../../../units';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: vh * 2,
  },
});

export default styles;
