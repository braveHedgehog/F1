/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import Style from './DriverCard.style';
import { useNavigation } from '@react-navigation/native';

const DriverCard = props => {

  const onSelect = () => {

    const navigation = useNavigation();

    props.navigation.navigate(
      'DriverDetail',
      {Country: props.Country},
      {name: props.name},
      {Driver_Number: props.Driver_Number},
      {team: props.team},
      {imageUrl: props.imageUrl},
      {Pole_Position: props.Pole_Position},
      {Points: props.Points},
      {Highest_Race_Finish: props.Highest_Race_Finish},
      {Grands_Prix_entered: props.Grands_Prix_entered},
      {Podiums: props.Podiums},
      {World_Champions: props.World_Champions},
      {Date_of_Birth: props.Date_of_Birth},
      {Place_of_birth: props.Place_of_birth},
      {Bio: props.Bio},
      {First_Win: props.First_Win},
      {helmet_url: props.helmet_url},
    );
  };

  return (
    <View style={Style.container}>
      <TouchableWithoutFeedback onPress={onSelect}>
        <View style={Style.inner_Container}>
          <Text style={Style.number}>{props.driver.Driver_Number}</Text>
          <Text style={Style.name}>{props.driver.name}</Text>
          <Text style={Style.country}>{props.driver.Country}</Text>
          <Text style={Style.team}>{props.driver.Team}</Text>
          <View style={Style.Image_container}>
            <Image style={Style.Image} source={{uri: props.driver.imageUrl}} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default DriverCard;
