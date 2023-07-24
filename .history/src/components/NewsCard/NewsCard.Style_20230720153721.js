/* eslint-disable prettier/prettier */
import {StyleSheet,Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6767',
    padding: 25,
  },
  align: {
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
  },
  Image: {
    resizeMode: 'contain',
    width: Dimensions.get('window').width /1.5,
    height: Dimensions.get('window').height / 3,
  },
});
