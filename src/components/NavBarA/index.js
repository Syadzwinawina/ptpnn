import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavBarA = ({ activePage }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={[
          styles.navbarItem,
          activePage === 'Dashboard_A' && styles.activeNavbarItem,
        ]}
        onPress={() => {
  
          navigation.navigate('Dashboard_A');
        }}
      >
        <Image
          source={require('../../assets/images/rumahAktif.png')}
          style={styles.navbarIcon}
        />
        <Text style={styles.navbarItemText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.navbarItem,
          activePage === 'Sounding_A' && styles.activeNavbarItem,
        ]}
        onPress={() => {
                  navigation.navigate('Sounding_A');
        }}
      >
        <Image
          source={require('../../assets/images/minyakAktif.png')}
          style={styles.navbarIcon}
        />
        <Text style={styles.navbarItemText}>Sounding</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.navbarItem,
          activePage === 'Rendemen_A' && styles.activeNavbarItem,
        ]}
        onPress={() => {
        
          navigation.navigate('Rendemen_A');
        }}
      >
        <Image
          source={require('../../assets/images/persenAktif.png')}
          style={styles.navbarIcon}
        />
        <Text style={styles.navbarItemText}>Rendemen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.navbarItem,
          activePage === 'Akun_A' && styles.activeNavbarItem,
        ]}
        onPress={() => {
          navigation.navigate('Akun_A');
        }}
      >
        <Image
          source={require('../../assets/images/orang.png')}
          style={styles.navbarIcon}
        />
        <Text style={styles.navbarItemText}>Akun</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity
        style={[
          styles.navbarItem,
          activePage === 'CPO_A' && styles.activeNavbarItem,
        ]}
        onPress={() => {
          navigation.navigate('CPO_A');
        }}
      >
        <Image
          source={require('../../assets/images/tabel.png')}
          style={styles.navbarIcon}
        />
        <Text style={styles.navbarItemText}>CPO</Text>
      </TouchableOpacity> */}
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


export default NavBarA;

