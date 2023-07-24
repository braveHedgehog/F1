/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#e10600',
  },
  container: {
    padding: 20,
  },
  slider: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3 ,
    resizeMode: 'contain',
  },
  align: {
    flexDirection: 'row',
    flex: 1,
  },
  name: {
    flex: 1,
    fontSize: 35,
    color: '#E8E8E8',
    paddingTop: 15,
  },
  track_country: {
    resizeMode: 'contain',
    width: 80,
    height: 80,
  },
  title: {
    fontSize: 17,
    padding: 10,
    color: '#0C0C0C',
    fontWeight: 'bold',
  },
  content: {
    color: '#E8E8E8',
    fontSize: 17,
    padding: 10,
  },
  driver: {
    color: '#E8E8E8',
    fontSize: 13,
    paddingLeft: 2,
    fontStyle: 'italic',
    padding: 10,
  },
});
