/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6ADAD',
  },
  name_container: {
    flexDirection: 'row',
    width:  Dimensions.get('window').width,
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
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2E2D2D',
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  country: {
    margin: 2,
    fontSize: 15,
    textAlign:'right',
    fontWeight: 'bold',
  },
  Image: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
  },
  team: {
    fontSize: 12,
    fontStyle: 'italic',
  },
});
