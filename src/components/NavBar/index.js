import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavManager from '../NavManager';
import NavAsisten from '../NavAsisten';
import NavPetugasTangki from '../NavPetugasTangki';
import NavBarA from '../NavBarA';
import { AuthContext } from '../../pages/AuthContext';

const NavBar = ({ activePage }) => {
  const navigation = useNavigation();
  const {user} = useContext(AuthContext);


  return (
    <View style={styles.navbar}>
      {
        user?.data[5] ==="Manajer" || user?.data[5] === "Masinis Kepala" ? (
          <NavManager activePage={activePage}/>
        ) : null
      }
      {
        user?.data[5] === "Asisten Pengolahan" ? (
          <NavAsisten activePage={activePage}/>
        ): null
      }
      {
        user?.data[5] === "Petugas Tangki" ? (
          <NavPetugasTangki activePage={activePage}/>
        ):null
      }
      {
      user?.data[5] === "Kerani CPO" ? (
          <NavBarA activePage={activePage}/>
        ):null
      }
    
      
    </View>
  );
};


const styles = StyleSheet.create({

container: {
  flex: 1,
},
contentContainer: {
  flex: 1,
  // Styling untuk konten lain di atas NavBar
},
navbar: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#fff',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: 60,
  borderTopWidth: 1,
  borderTopColor: '#000000',
},
navbarItem: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 1,
},
activeNavbarItem: {
  backgroundColor: '#9acd32',
},
navbarItemText: {
  fontSize: 14,
  marginTop: 2,
  color: '#000000',
},
navbarIcon: {
  width: 25,
  height: 25,
  marginBottom: 2,
},
});


export default NavBar;

