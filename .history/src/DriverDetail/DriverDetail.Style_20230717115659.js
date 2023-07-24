/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e10600',
  },
  Image: {
    flex: 1,
    resizeMode: 'cover',
    width: Dimensions.get('screen').width,
    height: 300,
  },
  number: {
    fontSize: 25,
    color: '#E8E8E8',
    marginTop: 20,
    padding: 10,
  },
  name: {
    fontSize: 25,
    color: '#E8E8E8',
    padding: 10,
  },
});
