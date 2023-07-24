/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6767',
    padding: 25,
  },
  align: {
    borderWidth: 2,
    borderRadius: 15,
    padding: 20,
    borderColor: '#F1E9E9',
  },
  Image: {
    resizeMode: 'contain',
    width: Dimensions.get('window').width / 1.3,
    height: Dimensions.get('window').height / 3,
  },
  title: {
    marginTop: 5,
    padding: 10,
    color: '#0C0C0C',
    fontWeight: 'bold',
    fontSize: 19,
  },
});
