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
    height: Dimensions.get('window').height / 4 ,
    resizeMode: 'contain',
  },
  name: {
    paddingTop: 10,
    flex:1,
    fontSize: 45,
    color: '#E8E8E8',
  },
  align: {
    flexDirection: 'row',
    flex: 1,
  },
  logo: {
    resizeMode: 'contain',
    width: 100,
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
  bio_title: {
    marginTop: 10,
    padding: 10,
    color: '#0C0C0C',
    fontWeight: 'bold',
    fontSize: 25,
  },
  bio: {
    textAlign: 'justify',
    color: '#E6DEDE',
    fontSize: 17,
    padding: 10,
    fontStyle: 'italic',
  },
});
