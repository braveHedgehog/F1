/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Style from './DriverDetail.Style';

const DriverDetail = ({route}) => {
  const {
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
    posterUrl,
    helmet_url,
    country_url,
  } = route.params;

  return (
    <ScrollView style={Style.page} >
      <Image style={Style.Image} source={{uri: posterUrl}} />
      <View style={Style.container}>
        <View style={Style.number_container} >
          <Text style={Style.number}>{Driver_Number}</Text>
          <Image style={Style.country_image} source={{uri: country_url}} />
        </View>
        <View style={Style.number_container} >
        <Text style={Style.name}>{name}</Text>
        <Image style={Style.helmet_image} source={{uri: helmet_url}} />
        </View>
        <Text style={Style.name}>{name}</Text>
        <View style={Style.inner_container}>
          <View style={Style.number_container} >
          <Text style={Style.title}>Team: </Text>
          <Text style={Style.content}>{Team}</Text>
          </View>
          <View style={Style.number_container} >
          <Text style={Style.title}>Country: </Text>
          <Text style={Style.content}>{Country}</Text>
          </View>
          <View style={Style.number_container} >
          <Text style={Style.title}>World Champions: </Text>
          <Text style={Style.content}>{World_Champions}</Text>
          </View>
          <View style={Style.number_container} >
          <Text style={Style.title}>Podiums: </Text>
          <Text style={Style.content}>{Podiums}</Text>
          </View>
          <View style={Style.number_container} >
          <Text style={Style.title}>Points: </Text>
          <Text style={Style.content}>{Points}</Text>
          </View>
          <View style={Style.number_container} >
          <Text style={Style.title}>Pole_Position: </Text>
          <Text style={Style.content}>{Pole_Position}</Text>
          </View>
          <View style={Style.number_container} >
          <Text style={Style.title}>Grands Prix Entered: </Text>
          <Text style={Style.content}>{Grands_Prix_entered}</Text>
          </View>
          <View style={Style.number_container} >
          <Text style={Style.title}>Highest Race Finish: </Text>
          <Text style={Style.content}>{Highest_Race_Finish}</Text>
          </View>
          <View style={Style.number_container} >
          <Text style={Style.title}>First Win: </Text>
          <Text style={Style.content}>{First_Win}</Text>
          </View>
          <View style={Style.number_container} >
          <Text style={Style.title}>Date of Birth: </Text>
          <Text style={Style.content}>{Date_of_Birth}</Text>
          </View>
          <View style={Style.number_container} >
          <Text style={Style.title}>Place of birth: </Text>
          <Text style={Style.content}>{Place_of_birth}</Text>
          </View>
        </View>
        <Text style={Style.bio_title} >Who is {name}</Text>
        <Text style={Style.bio}>{Bio}</Text>
      </View>
    </ScrollView>
  );
};

export default DriverDetail;
