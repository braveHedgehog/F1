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
    resizeMode: 'center',
    width: Dimensions.get('window').width,
    height: 100,
  },
});
