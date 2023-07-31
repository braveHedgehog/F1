/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FF6767',
    flexDirection: 'row',
    padding: 25,
  },
  Image: {
    resizeMode: 'contain',
    width: 100,
    height: 50,
  },
  Icon: {
    padding: 10,
    fontSize: 40,
    color: '#F6ADAD',
  },
  align: {
    flex:1,
    alignItems: 'flex-end',
  },
  Input: {
    textAlign: 'right',
    fontSize: 18,
    marginLeft: 20,
    marginTop: -10,
  },
});
