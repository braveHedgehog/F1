/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Image, TouchableWithoutFeedback, Link} from 'react-native';
import driver_data from '../driver-data.json';
import {FlatList} from 'react-native';
import Style from '../components/DriverCard/DriverCard.style';
//import DriverCard from '../components/DriverCard/DriverCard';





function Driver() {
  const [list, setList] = useState(driver_data);

  return (
    <FlatList
      keyExtractor={item => item.id.toString()}
      data={list}
      renderItem={({item}) => (
        <DriverCard driver={item} ItemSeparatorComponent={setList} />
      )}
    />
  );
};

const DriverCard = props => {

  return (
    <View style={Style.container}>
      <Link>
        <View style={Style.inner_Container}>
          <Text style={Style.number}>{props.driver.Driver_Number}</Text>
          <Text style={Style.name}>{props.driver.name}</Text>
          <Text style={Style.country}>{props.driver.Country}</Text>
          <Text style={Style.team}>{props.driver.Team}</Text>
          <View style={Style.Image_container}>
            <Image style={Style.Image} source={{uri: props.driver.imageUrl}} />
          </View>
        </View>
      </Link>
    </View>
  );
};

export default Driver;
