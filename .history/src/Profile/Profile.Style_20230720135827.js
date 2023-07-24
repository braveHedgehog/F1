/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6ADAD',
  },
  row_container: {
    padding: 20,
    flexDirection: 'row',
  },
  Image: {
    resizeMode: 'contain',
    width: 100,
    height: 50,
  },
  button: {
    padding: 10,
    flex: 1,
    alignItems: 'flex-end',
  },
  word: {
    color: '#E8E8E8',
    fontStyle: 'italic',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#F11010',
    fontSize: 20,
  },
});
