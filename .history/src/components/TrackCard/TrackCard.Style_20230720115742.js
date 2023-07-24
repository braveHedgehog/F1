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
    borderBottomWidth: 2,
    marginBottom: 10,
    borderBottomColor: '#F6ADAD',
  },
  date: {
    color: '#F6ADAD',
    fontSize: 20,
    flex:1,
    textAlign: 'left',
    paddingTop: 12,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  country_image: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
  country: {
    fontSize: 25,
    color: '#F6ADAD',
    fontWeight: 'bold',
  },
  name:{
    fontSize: 13,
    fontStyle: 'italic',
    color: '#F6ADAD',
    paddingTop: 10,
    borderBottomWidth: 2,
    paddingBottom: 10,
    borderBottomColor: '#F6ADAD',
  },

});
