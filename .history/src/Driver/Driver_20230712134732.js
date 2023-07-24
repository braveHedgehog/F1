/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import driver_data from '../driver-data.json';
import {FlatList, SafeAreaView, View, StyleSheet} from 'react-native';
import DriverCard from '../components/DriverCard/DriverCard';

const Driver = navigation => {
  const [list, setList] = useState(driver_data);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={list}
          renderItem={({item}) => <DriverCard song={item}
          ItemSeparatorComponent={setList}/>}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});

export default Driver;
