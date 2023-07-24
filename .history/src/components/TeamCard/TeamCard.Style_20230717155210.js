/* eslint-disable prettier/prettier */
import {StyleSheet,Dimensions} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e10600',
      },
      inner_container: {
        width: Dimensions.get('window').width,
        flexDirection: 'row',
      },
      driver: {
        flexDirection: 'row',
      },
      number: {
        padding: 15,
        textAlign: 'left',
      },
      wins: {
        textAlign: 'right',
      },
});
