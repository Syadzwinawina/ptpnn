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
import Dashboard_A from '../pages/Dashboard_A.js';
import Sounding_A from '../pages/Sounding_A.js';
import Download_A from '../pages/Download_A.js';
import Hapus_A from '../pages/Hapus_A.js';
import Rendemen_A from '../pages/Rendemen_A.js';
import Akun_A from '../pages/Akun_A.js';
import Tambah_A from '../pages/Tambah_A.js';
import CPO_A from '../pages/CPO_A.js';
import Tambah_CPO_A from '../pages/Tambah_CPO_A.js';
import Edit_CPO from '../pages/Edit_CPO.js';
import Edit_Akun from '../pages/Edit_Akun.js';
import Download_R_A from '../pages/Download_R_A.js';
import Download_R from '../pages/Download_R.js';
import Download_S from '../pages/Download_S.js';
import Hapus_R_A from '../pages/Hapus_R_A.js';

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
      <Stack.Screen
        name="Dashboard_A"
        component={Dashboard_A}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sounding_A"
        component={Sounding_A}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Download_A"
        component={Download_A}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Download_R_A"
        component={Download_R_A}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Download_R"
        component={Download_R}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Download_S"
        component={Download_S}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Hapus_A"
        component={Hapus_A}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Hapus_R_A"
        component={Hapus_R_A}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Rendemen_A"
        component={Rendemen_A}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Akun_A"
        component={Akun_A}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tambah_A"
        component={Tambah_A}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CPO_A"
        component={CPO_A}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tambah_CPO_A"
        component={Tambah_CPO_A}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Edit_CPO"
        component={Edit_CPO}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Edit_Akun"
        component={Edit_Akun}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
