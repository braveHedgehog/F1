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
  slider: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/4,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 30,
  },
});
