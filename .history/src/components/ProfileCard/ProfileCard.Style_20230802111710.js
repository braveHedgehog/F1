/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6ADAD',
  },
  row_container: {
    padding: 20,
    flexDirection: 'row',
  },
  Image: {
    resizeMode: 'contain',
    width: 100,
    height: 50,
  },
  button: {
    padding: 5,
    flex: 1,
    alignItems: 'flex-end',
  },
  word: {
    color: '#E8E8E8',
    fontStyle: 'italic',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#F11010',
    fontSize: 20,
  },
  inner_container: {
    padding: 20,
  },
  Personal: {
    marginTop: 25,
    fontSize: 35,
    color: '#2E2D2D',
    borderBottomWidth: 2,
    borderBottomColor: '#2E2D2D',
    paddingBottom: 10,
  },
  align: {
    paddingTop: 20,
    flexDirection: 'row',
    paddingBottom: 15,
  },
  title: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 20,
  },
  edit: {
    flex: 1,
  },
  edit_word: {
    fontSize: 17,
    fontStyle: 'italic',
    textAlign: 'right',
  },
  content: {
    marginVertical: 2,
    fontSize: 17,
    paddingLeft: 10,
  },
  car: {
    marginTop: 50,
    resizeMode: 'contain',
    width: Dimensions.get('window').width,
    height: 100,
  },
});
