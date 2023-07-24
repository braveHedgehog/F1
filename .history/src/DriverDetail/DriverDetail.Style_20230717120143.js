/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e10600',
  },
  Image: {
    resizeMode: 'stretch',
    width: Dimensions.get('screen').width,
    height: 400,
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
  country_image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  number_container: {
    flexDirection: 'row',
  }
});
