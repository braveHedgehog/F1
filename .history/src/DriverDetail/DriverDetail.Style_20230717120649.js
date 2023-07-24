/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#e10600',
  },
  container: {
    padding: 20,
    marginTop: 30,
  },
  Image: {
    resizeMode: 'stretch',
    width: Dimensions.get('screen').width,
    height: 400,
  },
  number: {
    fontSize: 45,
    color: '#E8E8E8',
  },
  name: {
    fontSize: 25,
    color: '#E8E8E8',
  },
  country_image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  number_container: {
    padding: 10,
    flexDirection: 'row',
  },
});
