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
  Image: {
    resizeMode: 'stretch',
    width: Dimensions.get('screen').width,
    height: 400,
  },
  number: {
    fontSize: 45,
    color: '#E8E8E8',
    padding: 10,
  },
  name: {
    fontSize: 25,
    color: '#E8E8E8',
    padding: 10,
    paddingTop: 25,
  },
  country_image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  number_container: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 17,
    padding: 10,
    color: '#0C0C0C',
    fontWeight: 'bold',
  },
  content: {
    textAlign: 'right',
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
  helmet_image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
});
