/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: Dimensions.get('window'),
    height: Dimensions.get('window') / 4 ,
    resizeMode: 'contain',
  },
  title: {},
});
