/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e10600',
  },
  Image: {
    resizeMode: 'contain',
    width: Dimensions.get('window').width,
    height: 300,
  },
  number: {
    fontSize: 25,
    color: '#E8E8E8',
    marginTop: 20,
  },
});
