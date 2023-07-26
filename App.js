// import React from 'react';
// import SplashScreen from './src/pages/SplashScreen';
// import Login from './src/pages/Login';
// import Beranda from './src/pages/Beranda';
// import Profile from './src/pages/Profile';
// import Riwayat from './src/pages/Riwayat';
// import Output from './src/pages/Output';
// import Rendemen from './src/pages/Rendemen';
// import Output_R from './src/pages/Output_R';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {NavigationContainer} from '@react-navigation/native';
// import MenuSatu from './src/pages/MenuSatu';


// export default function App() {
//   const Stack = createNativeStackNavigator();
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         <Stack.Screen name="Home" component={SplashScreen} />
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Beranda" component={Beranda} />
//         <Stack.Screen name="Profile" component={Profile} />
//         <Stack.Screen name="Riwayat" component={Riwayat} />
//         <Stack.Screen name="Output" component={Output} />
//         <Stack.Screen name="Rendemen" component={Rendemen} />
//         <Stack.Screen name="Output_R" component={Output_R} />
//         <Stack.Screen name="MenuSatu" component={MenuSatu} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';
import { UserProvider } from './src/pages/User_Context';
import { AuthStack } from './src/components';
import { AuthProvider } from './src/pages/AuthContext';
import Login from './src/pages/Login';
import Profile from './src/pages/Profile';



const App = () => {
  return (
      <NavigationContainer>
        <AuthProvider>
        <Router />
        </AuthProvider>
      </NavigationContainer>
  );
};
    

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
