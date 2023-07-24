/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e10600',
  },
  inner_container: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
  },
  team: {
    margin: 50,
    padding: 10,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderRadius: 5,
    borderColor: '#F1E9E9',
  },
  driver: {
    flexDirection: 'row',
  },
  number: {
    padding: 15,
    textAlign: 'left',
  },
  wins: {
    padding: 15,
    textAlign: 'right',
  },
});
