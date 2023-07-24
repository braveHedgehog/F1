/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e10600',
  },
  inner_container: {
    flex: 1,
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
    fontWeight: 'bold',
    color: '#F6ADAD',
    fontSize: 30,
    flex: 1,
    padding: 15,
    textAlign: 'left',
  },
  wins: {
    flex:1,
    padding: 15,
    textAlign: 'right',
  },
});
