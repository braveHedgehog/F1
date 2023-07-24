/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF6767',
        padding: 25,
      },
      align: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#F1E9E9',
        borderRadius: 10,
      },
      number: {
        fontWeight: 'bold',
        fontSize: 17,
        paddingRight: 3,
        color: '#F1E9E9',
        padding: 10,
      },
      name: {
        fontWeight: 'bold',
        fontSize: 17,
        paddingRight: 3,
        color: '#F1E9E9',
        padding: 10,
      },
      points: {
        flex: 1,
        textAlign: 'right',
        fontSize: 13,
        paddingRight: 3,
        color: '#F1E9E9',
        paddingTop: 15,
        fontStyle: 'italic',
      },
      driver: {
        fontSize: 8,
        paddingRight: 3,
        color: '#F1E9E9',
        padding: 15,
        paddingTop: 20,
        fontStyle: 'italic',
      },
});
