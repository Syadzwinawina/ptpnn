import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Beranda from '../pages/Beranda.js';
import Login from '../pages/Login.js';
import MenuSatu from '../pages/MenuSatu.js';
import Output_R from '../pages/Output_R.js';
import Output from '../pages/Output.js';
import Profile from '../pages/Profile.js';
import Rendemen from '../pages/Rendemen.js';
import Riwayat from '../pages/Riwayat.js';
import SplashScreen from '../pages/SplashScreen.js';
import GrafikH from '../pages/GrafikH.js';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Beranda"
        component={Beranda}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MenuSatu"
        component={MenuSatu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Output_R"
        component={Output_R}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Output"
        component={Output}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Rendemen"
        component={Rendemen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Grafik"
        component={GrafikH}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Riwayat"
        component={Riwayat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Menu"
        component={MenuSatu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sounding"
        component={Beranda}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GrafikH"
        component={GrafikH}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
