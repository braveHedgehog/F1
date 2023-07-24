import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Season from './Seasons/Seasons';
import NewsDetail from './NewsDetails/NewsDetails';
import SeasonDetail from './SeasonDetail/SeasonDetail';
import Driver from './Driver/Driver';
import DriverDetail from './DriverDetail/DriverDetail';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-paper/lib/typescript/src/components/Icon';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const F1Stack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={Home} />
      <Stack.Screen name="NewsDetail" component={NewsDetail} />
    </Stack.Navigator>
  );
};

const SeasonStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Season" component={Season} />
      <Stack.Screen name="SeasonDetail" component={SeasonDetail} />
    </Stack.Navigator>
  );
};

const DriverStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Driver" component={Driver} />
      <Stack.Screen name="DriverDetail" component={DriverDetail} />
    </Stack.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={Icon.Home} size={15} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={F1Stack} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Season" component={SeasonStack} />
        <Tab.Screen name="Driver" component={DriverStack} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="SignUp" component={SignUp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;