/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6ADAD',
    },
    name_container: {
        flexDirection:'row',
    },
    inner_Container: {
        margin:50,
        padding: 10,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth:2,
        borderRadius: 20,
        borderColor: '#3A3A3A',
    },
    number: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#2E2D2D',
    },
    name: {
        fontSize: 17,
        textAlign: 'left',
        fontWeight: 'bold',
    },
});
