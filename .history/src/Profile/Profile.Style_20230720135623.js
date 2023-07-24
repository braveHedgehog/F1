/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6ADAD',
  },
  row_container: {
    padding: 20,
    flex: 1,
    flexDirection: 'row',
  },
  Image: {
    resizeMode: 'contain',
    width: 100,
    height: 50,
  },
  button: {
    padding: 0,
    flex: 1,
    alignItems: 'flex-end',
    backgroundColor: '#F11010',
    borderRadius: 10,
  },
  word: {
    fontSize: 20,
  },
});
