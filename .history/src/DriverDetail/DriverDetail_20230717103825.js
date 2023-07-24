/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

const DriverDetail = ({route}) => {
  const {id,
    name,
    Team,
    Driver_Number,
    Pole_Position,
    Points,
    Highest_Race_Finish,
    Grands_Prix_entered,
    Country,
    Podiums,
    World_Champions,
    Date_of_Birth,
    Place_of_birth,
    Bio,
    First_Win,
    imageUrl,
    helmet_url} = route.params;

console.log(id);
console.log(name);
console.log(Team);
console.log(Driver_Number);
console.log(Pole_Position);
console.log(Points);
console.log(Highest_Race_Finish);
console.log(Grands_Prix_entered);
console.log(Country);
console.log(Podiums);
console.log(World_Champions);
console.log(Date_of_Birth);
console.log(Place_of_birth);
console.log(Bio);
console.log(First_Win);
console.log(imageUrl);
console.log(helmet_url);

  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default DriverDetail;
