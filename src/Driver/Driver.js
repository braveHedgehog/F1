/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import driver_data from '../driver-data.json';
import {FlatList, ScrollView} from 'react-native';
import DriverCard from '../components/DriverCard/DriverCard';
import AppBar from '../components/AppBar/AppBar';
import Style from '../Team/TeamStyle';

const Driver = ({navigation}) => {
  const [list, setList] = useState(driver_data);
  const handleSearch = text => {
    const filteredList = driver_data.filter(driver => {
      const searchedText = text.toLowerCase();
      const currentTitle = driver.name.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });

    setList(filteredList);
  };

  return (
    <ScrollView style={Style.page} >
      <AppBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={list}
        renderItem={({item}) => (
          <DriverCard
            driver={item}
            ItemSeparatorComponent={setList}
            onSelect={() => {
              navigation.navigate('DriverDetail', {
                id: item.id,
                name: item.name,
                Team: item.Team,
                Driver_Number: item.Driver_Number,
                Pole_Position: item.Pole_Position,
                Points: item.Points,
                Highest_Race_Finish: item.Highest_Race_Finish,
                Grands_Prix_entered: item.Grands_Prix_entered,
                Country: item.Country,
                Podiums: item.Podiums,
                World_Champions: item.World_Champions,
                Date_of_Birth: item.Date_of_Birth,
                Place_of_birth: item.Place_of_birth,
                Bio: item.Bio,
                First_Win: item.First_Win,
                imageUrl: item.imageUrl,
                posterUrl: item.posterUrl,
                helmet_url: item.helmet_url,
                country_url: item.country_url,
              });
            }}
          />
        )}
      />
    </ScrollView>
  );
};

export default Driver;
