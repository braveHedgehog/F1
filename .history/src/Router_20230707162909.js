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
import {Ionicons} from 'react-native-vector-icons';

const Tab = createMaterialBottomTabNavigator({
  Home: {
    screen: Home, // here the screen is the HomePage
    navigationOptions: {
      tabBarLabel: 'Home', // lablel of the tab
      tabBarIcon: () => {
        // Setting icon of the tab
        return <Ionicons name="md-home" size={28} color="#344953" />;
      },
    },
  },
});
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
      <Tab.Navigator>
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
