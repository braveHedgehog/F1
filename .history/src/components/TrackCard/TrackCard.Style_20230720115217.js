/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e10600',
  },
  round: {
    fontSize: 25,
    padding: 25,
    color: '#F6ADAD',
    fontWeight: 'bold',
  },
  inner_container: {
    margin: 25,
    padding: 10,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderRadius: 5,
    borderColor: '#F1E9E9',
    marginTop: 10,
  },
  row_container: {
    flex: 1,
    flexDirection: 'row',
  },
  date: {
    color: '#F6ADAD',
    fontSize: 18,
  },
});
