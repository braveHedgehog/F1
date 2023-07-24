/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Style from './TeamDetail.Style';
import {SliderBox} from 'react-native-image-slider-box';

const TeamDetail = ({route}) => {
  const {
    name,
    base,
    constructor_champions,
    driver_champions,
    wins,
    pole,
    podiums,
    Total_Grand_Prix,
    Team_chief,
    technical_chief,
    power_unit,
    first_team_entry,
    Bio,
    logo,
    car,
    second_driver,
    firs_driver,
    slider_1,
    slider_2,
    slider_3,
  } = route.params;

  constructor();{
    this.state = {
      images: [
        slider_1,
        slider_2,
        slider_3
      ]
    };
  }

  return (
    <ScrollView style={Style.page}>
      <SliderBox images={this.state.images} style={Style.slider} />
      <View style={Style.container}>
        <View style={Style.align} >
        <Text style={Style.name}>{name}</Text>
        <Image style={Style.logo} source={{uri: logo}} />
        </View>
        <View style={Style.inner_container}>
          <View style={Style.align} >
          <Text style={Style.title}>Base: </Text>
          <Text style={Style.content}>{base}</Text>
          </View>
          <View style={Style.align} >
          <Text style={Style.title}>Team Chief: </Text>
          <Text style={Style.content}>{Team_chief}</Text>
          </View>
          <View style={Style.align} >
          <Text style={Style.title}>Technical Chief: </Text>
          <Text style={Style.content}>{technical_chief}</Text>
          </View>
          <View style={Style.align} >
          <Text style={Style.title}>Power Unit: </Text>
          <Text style={Style.content}>{power_unit}</Text>
          </View>
          <View style={Style.align} >
          <Text style={Style.title}>First Team Entry: </Text>
          <Text style={Style.content}>{first_team_entry}</Text>
          </View>
          <View style={Style.align} >
          <Text style={Style.title}>Constructor Champions: </Text>
          <Text style={Style.content}>{constructor_champions}</Text>
          </View>
          <View style={Style.align} >
          <Text style={Style.title}>Driver Champions: </Text>
          <Text style={Style.content}>{driver_champions}</Text>
          </View>
          <View style={Style.align} >
          <Text style={Style.title}>Wins: </Text>
          <Text style={Style.content}>{wins}</Text>
          </View>
          <View style={Style.align} >
          <Text style={Style.title}>Pole Positions: </Text>
          <Text style={Style.content}>{pole}</Text>
          </View>
          <View style={Style.align} >
          <Text style={Style.title}>Podiums: </Text>
          <Text style={Style.content}>{podiums}</Text>
          </View>
          <View style={Style.align} >
          <Text style={Style.title}>Total Grand Prix: </Text>
          <Text style={Style.content}>{Total_Grand_Prix}</Text>
          </View>
          <View style={Style.align} >
          <Text style={Style.title}>First Driver: </Text>
          <Text style={Style.content}>{firs_driver}</Text>
          </View>
          <View style={Style.align} >
          <Text style={Style.title}>Second Driver: </Text>
          <Text style={Style.content}>{second_driver}</Text>
          </View>
        </View>
        <Text style={Style.bio_title}>What is {name}</Text>
        <Text style={Style.bio}>{Bio}</Text>
      </View>
    </ScrollView>
  );
};

export default TeamDetail;
