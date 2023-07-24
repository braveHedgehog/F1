/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E74C3C',
  },
  inner_Container: {
    margin: 50,
    padding: 10,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderRadius: 5,
    borderColor: '#4B4141',
  },
  number: {
    paddingBottom: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4159BF',
  },
  name: {
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E8E8E8',
  },
  country: {
    padding: 5,
    fontSize: 15,
    textAlign:'right',
    fontWeight: 'bold',
    color: '#E8E8E8',
  },
  Image: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
  },
  team: {
    padding: 5,
    fontSize: 13,
    fontStyle: 'italic',
    color: '#E8E8E8',
  },
  Image_container: {
    alignItems: 'flex-end',
  },
});
