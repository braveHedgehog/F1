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
    padding: 5,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderRadius: 5,
    borderColor: '#F1E9E9',
  },
  driver_container: {
    flex: 1,
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
    fontWeight: 'bold',
    color: '#F6ADAD',
    fontSize: 30,
    flex: 1,
    padding: 15,
    textAlign: 'right',
  },
  logo: {
    flex: 1,
    resizeMode: 'contain',
    width: 100,
    height: 100,
  },
  name: {
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E8E8E8',
  },
  driver: {
    textAlign: 'left',
    flex: 1,
    padding: 5,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#E8E8E8',
  },
  second_driver: {
    textAlign: 'right',
    flex: 1,
    padding: 5,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#E8E8E8',
  },
  car: {
    resizeMode: 'contain',
    width: Dimensions.get('window').width,
    height: 100,
  },

});
