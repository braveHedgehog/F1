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

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const F1Stack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={Home}
        options={{
          header: Boolean,
        }}
      />
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
        options={{
          header: Boolean,
        }}
      />
    </Stack.Navigator>
  );
};

const SeasonStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SeasonStack"
        component={Season}
        options={{
          header: Boolean,
        }}
      />
      <Stack.Screen
        name="SeasonDetail"
        component={SeasonDetail}
        options={{
          header: Boolean,
        }}
      />
    </Stack.Navigator>
  );
};

const DriverStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DriverStack"
        component={Driver}
        options={{
          header: Boolean,
        }}
      />
      <Stack.Screen
        name="DriverDetail"
        component={DriverDetail}
        options={{
          header: Boolean,
        }}
      />
    </Stack.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
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
