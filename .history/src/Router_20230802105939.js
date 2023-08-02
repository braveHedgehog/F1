import React from 'react';
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
import FlashMessage from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';

const Tab = createMaterialBottomTabNavigator();
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

const LogStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LogIn"
        component={Login}
        options={{
          header: Boolean,
        }}
      />
      <Stack.Screen
        name="LogStack"
        component={SignUp}
        options={{
          header: Boolean,
        }}
      />
    </Stack.Navigator>
  );
};

function App() {
  const [userSession, setUserSession] = React.useState();

  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Track" component={TrackStack} />
        <Tab.Screen name="Driver" component={DriverStack} />
        <Tab.Screen name="Team" component={TeamStack} />
        {!userSession ? (
          <Tab.Screen name="LogIn" component={LogStack} />
        ) : (
          <Tab.Screen name="Profile" component={Profile} />
        )}
      </Tab.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

export default App;
