/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6ADAD',
  },
  inner_Container: {
    margin: 50,
    padding: 10,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderRadius: 10,
    borderColor: '#3A3A3A',
  },
  number: {
    textAlign: 'center',
    paddingBottom: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2E2D2D',
  },
  name: {
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E2D2D',
  },
  country: {
    padding: 5,
    fontSize: 15,
    textAlign:'right',
    fontWeight: 'bold',
    color: '#2E2D2D',
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
    color: '#2E2D2D',
  },
  Image_container: {
    alignItems: 'flex-end',
  },
});
