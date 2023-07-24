/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useRef, useEffect} from 'react';
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
import SplashScreen from './components/SplashScreen';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
const store = useRef(undefined);
const queryClient = useRef(undefined);

const [isAppReady, setIsAppReady] = useState(false);

useEffect(() => {
  initialize().then(context => {
    store.current = context.store;
    queryClient.current = context.queryClient;

    setIsAppReady(true);
  });
}, []);
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
    <SplashScreen isAppReady={isAppReady}>
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
    </SplashScreen>
  );
}

export default App;
