import React from 'react';
import Icon from 'react-native-vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Tracks from './Tracks/Tracks';
import TracksDetail from './TracksDetail/TracksDetail';
import Driver from './Driver/Driver';
import DriverDetail from './DriverDetail/DriverDetail';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Team from './Team/Team';
import TeamDetail from './TeamDetail/TeamDetail';
const Tab = createMaterialBottomTabNavigator(
  {
    HomePage: {
      screen: Home,

      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" size={30} color="#900" />
        ),
      },
    },
    ProfilePage: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (
          <Icon name="users" size={30} color="#900" />
        ),
      },
    },
  },

  {
    order: ['HomePage', 'ProfilePage'],
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#D4AF37',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white',
      },
    },
  },
);
const Stack = createNativeStackNavigator();

const TrackStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TrackStack"
        component={Tracks}
        options={{
          header: Boolean,
        }}
      />
      <Stack.Screen
        name="TrackDetail"
        component={TracksDetail}
        options={{
          header: Boolean,
        }}
      />
    </Stack.Navigator>
  );
};

const TeamStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TeamStack"
        component={Team}
        options={{
          header: Boolean,
        }}
      />
      <Stack.Screen
        name="TeamDetail"
        component={TeamDetail}
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
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Track" component={TrackStack} />
        <Tab.Screen name="Driver" component={DriverStack} />
        <Tab.Screen name="Team" component={TeamStack} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="SignUp" component={SignUp} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
